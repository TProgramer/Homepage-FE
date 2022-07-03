import { useEffect, useState } from "react";

export default function useFetch<DataType>(
  url: string,
  options: RequestInit
): [DataType | undefined, boolean, Error | null] {
  const [data, setData] = useState<DataType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [data, error]);

  return [data, loading, error];
}
