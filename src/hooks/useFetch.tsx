import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTokenContext } from "../context/TokenState";

type HTTPMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface Request {
  get: <DataType>(
    path: string
  ) => Promise<{ error: number | undefined } & DataType>;
  post: <DataType>(
    path: string,
    body: Object
  ) => Promise<{ error: number | undefined } & DataType>;
  put: <DataType>(
    path: string,
    body: Object
  ) => Promise<{ error: number | undefined } & DataType>;
  patch: <DataType>(
    path: string,
    body: Object
  ) => Promise<{ error: number | undefined } & DataType>;
  del: <DataType>(
    path: string
  ) => Promise<{ error: number | undefined } & DataType>;
}

interface Result {
  data: any;
  loading: boolean;
  error: number | null;
}

async function refreshJWT(
  refreshToken: string,
  setTokens: (tokens: { accessToken: string; refreshToken: string }) => void
) {
  const response = await fetch("/api/refresh", {
    method: "POST",
    body: JSON.stringify({ refreshToken }),
  });
  if (response.ok) {
    const { access_token, refresh_token } = await response.json();
    setTokens({ accessToken: access_token, refreshToken: refresh_token });
  }
  return response.status;
}

export default function useFetch(host?: string, path?: string) {
  const { accessToken, refreshToken, setTokens } = useTokenContext();
  const [{ loading, data, error }, setResult] = useState<Result>({
    data: null,
    loading: true,
    error: null,
  });
  const router = useRouter();

  if (!host) {
    host = "http://localhost:3000";
  }

  function makeFetch(
    method: HTTPMethod
  ): <DataType>(
    path: string,
    body?: Object
  ) => Promise<{ error: number | undefined } & DataType> {
    return async (path: string, body?: Object) => {
      setResult({ loading: true, data: null, error: null });
      const res = await fetch(`${host}${path}`, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        if (res.status === 204) {
          setResult({ loading: false, data: null, error: null });
          return {};
        } else {
          const json = await res.json();
          if (json.data) {
            setResult({ loading: false, data: json.data, error: null });
          } else {
            setResult({ loading: false, data: json, error: null });
          }
          return { ...json };
        }
      } else if (res.status === 401) {
        if (refreshToken) {
          const refreshStatus = await refreshJWT(refreshToken, setTokens);
          if (refreshStatus === 200) {
            return makeFetch(method)(path, body);
          } else if (refreshStatus === 400) {
            setResult({ loading: false, data: null, error: refreshStatus });
          }
        } else {
          alert("로그인이 필요합니다.");
          router.push("/signin");
        }
        return { error: 401 };
      } else {
        setResult({ loading: false, data: null, error: res.status });
        return { error: res.status };
      }
    };
  }

  const { get, post, put, patch, del }: Request = {
    get: makeFetch("GET"),
    post: makeFetch("POST"),
    put: makeFetch("PUT"),
    patch: makeFetch("PATCH"),
    del: makeFetch("DELETE"),
  };

  useEffect(() => {
    if (path) {
      get(path);
    }
  }, []);

  return { get, post, put, patch, del, data, loading, error };
}
