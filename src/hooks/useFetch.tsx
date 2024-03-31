/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<[] | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const refetch = ({ params }: any) => {
    let newParams = {};
    for (let iterator in params) {
      newParams = { ...newParams, [iterator]: params[iterator].toString() };
    }
    url += "?" + new URLSearchParams(newParams).toString();
    get(url);
  };

  const get = async (url: string) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else setError(true);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    get(url);
  }, [url]);

  return { data, isLoading, error, refetch };
};

export default useFetch;
