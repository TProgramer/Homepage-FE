import { useState, useEffect } from "react";
import { useTokenContext } from "../context/tokenState";

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

interface Request<DataType> {
  get: (path: string) => Promise<DataType>;
  post: (path: string, body: Object) => Promise<DataType>;
  put: (path: string, body: Object) => Promise<DataType>;
  del: (path: string) => Promise<DataType>;
}

interface Result<DataType> {
  data: DataType | null;
  loading: boolean;
  error: any;
}

export default function useFetch<DataType>(host: string) {
  const { accessToken } = useTokenContext();

  function makeFetch(
    method: HTTPMethod
  ): (path: string, body?: Object) => Promise<DataType> {
    return (path: string, body?: Object) =>
      fetch(`${host}${path}`, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((res) => res as DataType);
  }

  const [{ get, post, put, del }, setRequest] = useState<Request<DataType>>({
    get: makeFetch("GET"),
    post: makeFetch("POST"),
    put: makeFetch("PUT"),
    del: makeFetch("DELETE"),
  });

  const [{ loading, data, error }, setResult] = useState<Result<DataType>>({
    data: null,
    loading: true,
    error: null,
  });

  return { get, post, put, del, data, loading, error };
}
