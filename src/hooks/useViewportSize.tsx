import { useState } from "react";
import { useWindowEvent } from "./useWindowEvent";

const useViewportSize = () => {
  const [size, setSize] = useState({ height: window.innerHeight, width: window.innerWidth });
  useWindowEvent("resize", updateSize);

  function updateSize(event: any) {
    const { innerHeight: height, innerWidth: width } = event.target;
    setSize({ height, width });
  }

  return { height: size.height, width: size.width };
};

export default useViewportSize;
