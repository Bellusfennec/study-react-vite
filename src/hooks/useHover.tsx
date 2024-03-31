/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from "react";

const useHover = () => {
  const ref = useRef<any>(null);
  const [hovered, setHover] = useState(false);

  const handleMouseHover = useCallback(() => {
    setHover(!hovered);
  }, [hovered]);

  const handleMouseHoverEvent = () => {
    if (ref.current !== null) {
      ref.current.addEventListener("mouseover", handleMouseHover);
      ref.current.addEventListener("mouseout", handleMouseHover);
    }
  };

  useEffect(() => {
    handleMouseHoverEvent();
    return () => handleMouseHoverEvent();
  }, [ref, hovered]);

  return { hovered, ref };
};

export default useHover;
