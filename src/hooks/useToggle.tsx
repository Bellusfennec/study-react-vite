import { useState } from "react";

type Data = boolean | string[];

const useToggle = (data: Data) => {
  const [value, setValue] = useState<any>(() => initialState(data));

  function initialState(data: Data) {
    if (typeof data === "boolean") {
      return data;
    } else if (Array.isArray(data)) {
      return data[0];
    }
  }

  const toggle = (newValue?: any) => {
    if (typeof data === "boolean") {
      setValue((state: any) => (newValue ? newValue : !state));
      return;
    } else if (Array.isArray(data)) {
      const index = data.findIndex((item: any) => item === value);
      const nextValue = data[index + 1] ? data[index + 1] : data[0];
      setValue(() => (newValue ? newValue : nextValue));
      return;
    }
  };

  return [value, toggle];
};

export default useToggle;
