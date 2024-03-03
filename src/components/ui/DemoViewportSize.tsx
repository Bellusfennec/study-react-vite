import { Fieldset } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

export const DemoViewportSize = () => {
  const { height, width } = useViewportSize();

  return (
    <Fieldset legend="useWindowScroll">
      Width: {width}, height: {height}
    </Fieldset>
  );
};
