/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export function useWindowEvent(type: string, listener: (arg: any) => void, options?: Object) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener]);
}
