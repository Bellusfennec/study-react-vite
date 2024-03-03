import { Fieldset } from "@mantine/core";
import { useHover } from "@mantine/hooks";

export const DemoHover = () => {
  const { hovered, ref } = useHover();

  return (
    <Fieldset legend="useHover">
      <div ref={ref}>{hovered ? "На меня навели мышку" : "Наведи мышкой на меня"}</div>
    </Fieldset>
  );
};
