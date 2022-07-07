import { useState } from "react";
import { useTokenContext } from "../context/tokenState";

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
  setToken: (accessToken: string, refreshToken: string) => void
) {
  const refreshToken = localStorage.getItem("refreshToken");
  const response = await fetch("/api/refresh", {
    method: "POST",
    body: JSON.stringify({ refreshToken }),
  });
  if (response.ok) {
    const { access_token, refresh_token } = await response.json();
    setToken(access_token, refresh_token);
  } else {
    throw response.status;
  }
}

export default function useFetch(host: string, path?: string) {
  const { accessToken, setToken } = useTokenContext();
  const [{ loading, data, error }, setResult] = useState<Result>({
    data: null,
    loading: true,
    error: null,
  });

  function makeFetch(
    method: HTTPMethod
  ): <DataType>(
    path: string,
    body?: Object
  ) => Promise<{ error: number | undefined } & DataType> {
    return async (path: string, body?: Object) => {
      setResult({ data: null, loading: true, error: null });
      const res = await fetch(`${host}${path}`, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        const json = await res.json();
        setResult({ loading: false, data: json, error: null });
        return { ...data };
      } else if (res.status === 401) {
        try {
          await refreshJWT(setToken);
        } catch (error) {
          if (typeof error === "number") {
            setResult({ loading: false, data: null, error });
          } else {
            console.error(error);
          }
        }
        return makeFetch(method)(path, body);
      } else {
        setResult({ loading: false, data: null, error: res.status });
        return { error };
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

  if (path) {
    get(path);
  }

  return { get, post, put, patch, del, data, loading, error };
}
