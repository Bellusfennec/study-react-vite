/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useRef, useState } from "react";

interface UseFetchMoreProps {
  url: string;
  name?: string;
  page?: number;
}

const useFetchMore = (props: UseFetchMoreProps) => {
  const { url, page, name } = props;
  const nameRef = useRef<string>("");
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isHasMore, setHasMore] = useState(false);

  useEffect(() => {
    setData([]);
  }, [name]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel: any;
    axios({ method: "GET", url, params: { page, name }, cancelToken: new axios.CancelToken((c) => (cancel = c)) })
      .then((res: any) => {
        console.log(res, res?.data?.results);
        if (name === nameRef.current) {
          setData((state) => [...new Set([...state, ...res?.data?.results])]);
        } else {
          setData(res?.data?.results);
        }
        setHasMore(res?.data?.results.length > 0);
        if (name) nameRef.current = name;
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          return;
        }
        setHasMore(false);
        setError(error);
      })
      .finally(() => setLoading(false));

    return () => cancel();
  }, [url, page, name]);

  return { data, isLoading, isError, isHasMore };
};

export default useFetchMore;
