import { useState } from "react";
import { useWindowEvent } from "./useWindowEvent";

interface Scroll {
  x?: number;
  y?: number;
}

const useWindowScroll = () => {
  const [scroll, setScroll] = useState<any>({ x: 0, y: 0 });
  useWindowEvent("scroll", updateScroll);

  function updateScroll(event: any) {
    const { scrollX: x, scrollY: y } = event.target.defaultView;
    setScroll({ x, y });
  }

  const scrollTo = ({ y }: Scroll) => {
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return [scroll, scrollTo];
};

export default useWindowScroll;
