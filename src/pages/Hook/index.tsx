import { Flex } from "@mantine/core";
import { DemoFetch } from "../../components/ui/DemoFetch";
import { DemoHover } from "../../components/ui/DemoHover";
import { DemoLocalStorage } from "../../components/ui/DemoLocalStorage";
import { DemoToggle } from "../../components/ui/DemoToggle";
import { DemoToggleSecond } from "../../components/ui/DemoToggleSecond";
import { DemoViewportSize } from "../../components/ui/DemoViewportSize";
import { DemoWindowScroll } from "../../components/ui/DemoWindowScroll";

const Hook = () => {
  return (
    <Flex direction="column" gap="md">
      <DemoFetch />
      <DemoLocalStorage />
      <DemoHover />
      <DemoViewportSize />
      <DemoWindowScroll />
      <DemoToggle />
      <DemoToggleSecond />
    </Flex>
  );
};

export default Hook;
