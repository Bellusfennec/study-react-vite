import { Link, useSearchParams } from "react-router-dom";
import useSort from "../../../hooks/useSort";
import SelectDirectionSort from "../../../components/ui/SelectDirectionSort";
import { useRef, useState } from "react";
import useFetchMore from "../../../hooks/useFetchMore";
import { Fieldset, Flex, Loader, TextInput } from "@mantine/core";

const LocationList = () => {
  const url = "https://rickandmortyapi.com/api/location";
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const { data: heroList, isLoading, isError, isHasMore } = useFetchMore({ url, page, name });
  const { data } = useSort({ data: heroList });
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [, serParams] = useSearchParams();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lastNodeRef = (node: any) => {
    if (isLoading) return;
    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && isHasMore) {
        serParams({ sort: "null" });
        setPage((state) => state + 1);
      }
    });
    if (node) observerRef.current.observe(node);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlerChangeSearch = (event: any) => {
    setName(event.target.value);
    setPage(1);
  };
  return (
    <Fieldset legend="Локации">
      <Flex gap="md" direction="column">
        <SelectDirectionSort />
        <TextInput placeholder="Поиск..." onChange={handlerChangeSearch} />

        <div>
          {data.map((item, index) => {
            if (data.length === index + 1) {
              console.log(data, data.length, index + 1);
              return (
                <div ref={lastNodeRef} key={item.id}>
                  <Link to={`${item.id}`}>
                    {item.id} {item.name} ({new Date(item.created).toLocaleDateString()},{" "}
                    {new Date(item.created).toLocaleTimeString()})
                  </Link>
                </div>
              );
            } else {
              return (
                <div key={item.id}>
                  <Link to={`${item.id}`}>
                    {item.id} {item.name} ({new Date(item.created).toLocaleDateString()},{" "}
                    {new Date(item.created).toLocaleTimeString()})
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </Flex>
      {isLoading && <Loader />}
      {isError && <p>Ошибка</p>}
    </Fieldset>
  );
};

export default LocationList;
