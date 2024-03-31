import { useSearchParams } from "react-router-dom";
import { Direction } from "../types";

interface useSortProps {
  data: any[];
  direction?: Direction;
}

const useSort = (props: useSortProps) => {
  const { data, direction } = props;
  let [params] = useSearchParams();
  const query = (
    params.get("sort") === "ASC" || params.get("sort") === "DESC" ? params.get("sort") : null
  ) as Direction;
  const finallyData = data.length > 0 && data[0]?.created ? getSorted(data, query || direction) : data;

  function getSorted(data: any[], query: Direction) {
    if (query === "ASC" || query === "DESC") {
      const sortedData = [...data].sort((a: any, b: any) => {
        const aa = +new Date(a.created).getTime();
        const bb = +new Date(b.created).getTime();
        return query === "ASC" ? bb - aa : bb + aa;
      });
      return sortedData;
    }
    return data;
  }

  return { data: finallyData, direction };
};

export default useSort;
