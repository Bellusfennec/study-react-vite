import { Button, Fieldset } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

export const DemoWindowScroll = () => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <Fieldset legend="useWindowScroll">
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Fieldset>
  );
};
