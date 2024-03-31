import { Button, Fieldset, Flex } from "@mantine/core";
import { useToggle } from "@mantine/hooks";

export const DemoToggleSecond = () => {
  const [value, toggle] = useToggle(["light", "dark"]);

  return (
    <Fieldset legend="useToggle 2">
      <Flex gap={10}>
        <Button variant="outline" color={value} onClick={() => toggle()} style={{ boxShadow: "0 0 2px 0px black" }}>
          {value}
        </Button>
        <Button onClick={() => toggle("dark")}>Set dark</Button>
      </Flex>
    </Fieldset>
  );
};
