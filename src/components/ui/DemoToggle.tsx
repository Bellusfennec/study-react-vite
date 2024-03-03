import { Button, Fieldset } from "@mantine/core";
import useToggle from "../../hooks/useToggle";

export const DemoToggle = () => {
  const [value, toggle] = useToggle(["blue", "orange", "cyan", "teal"]);

  return (
    <Fieldset legend="useToggle">
      <Button color={value} onClick={() => toggle()}>
        {value}
      </Button>
    </Fieldset>
  );
};
