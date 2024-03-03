import { Button, Fieldset } from "@mantine/core";
import useFetch from "../../hooks/useFetch";

interface Item {
  id: string;
  title: string;
}

export function DemoFetch() {
  const { data, isLoading, error, refetch } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <Fieldset legend="useFetch">
      <Button loading={isLoading} onClick={() => refetch({ params: { _limit: 3 } })}>
        Перезапросить
      </Button>
      {error && "Произошла ошибка"}
      {data && !isLoading && data.map((item: Item) => <div key={item.id}>{item.title}</div>)}
    </Fieldset>
  );
}
