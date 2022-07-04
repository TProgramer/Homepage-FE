import { useEffect, useState } from "react";

export default function useFetch<DataType>(
  url: string,
  options: RequestInit
): [DataType | undefined, boolean, Error | undefined] {
  const [data, setData] = useState<DataType>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchfunc = async () => {
      await fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
          setData(data.data);
        })
        .catch((error) => {
          setError(error);
        });
    };
    fetchfunc();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [data, error]);

  return [data, loading, error];
}
