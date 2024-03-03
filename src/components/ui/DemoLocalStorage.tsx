import { Button, Fieldset, Flex } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

export const DemoLocalStorage = () => {
  const [value, setValue, removeValue] = useLocalStorage({
    key: "key",
    defaultValue: ""
  });

  return (
    <Fieldset legend="useLocalStorage">
      <p>Твой токен: {value}</p>
      <Flex gap="md">
        <Button onClick={() => setValue("new-token")}>Задать токен</Button>
        <Button onClick={() => removeValue()}>Удалить токен</Button>
      </Flex>
    </Fieldset>
  );
};
