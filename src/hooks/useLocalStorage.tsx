import { useState } from "react";

const useLocalStorage = (name: string) => {
  const [token, setToken] = useState<any>(() => getToken(name));

  function getToken(name: string) {
    const value = localStorage.getItem(name) && JSON.parse(localStorage.getItem(name) || "");
    return value;
  }

  const setItem = (value: any) => {
    localStorage.setItem(name, JSON.stringify(value));
    setToken(value);
  };
  const removeItem = () => {
    localStorage.removeItem(name);
    setToken(null);
  };
  return [token, { setItem, removeItem }];
};

export default useLocalStorage;
