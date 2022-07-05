import { useState, useEffect } from "react";
import { useFetch as useHttpFetch, IncomingOptions, Res } from "use-http";

export default function useFetch<DataType>(
  url: string,
  options?: IncomingOptions
) {
  const host = "";
  const {
    request: httpRequest,
    response: httpResponse,
    loading: httpLoading,
    data: httpData,
    error: httpError,
  } = useHttpFetch<DataType>(`${host}${url}`, options);

  const [response, setResponse] = useState<Res<DataType>>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (httpResponse.ok === false) {
      if (httpResponse.status === 401) {
      } else if (httpResponse.status === 403) {
      } else {
      }
    } else {
    }
  }, [httpLoading]);
}
