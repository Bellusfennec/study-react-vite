import { ButtonHTMLAttributes } from "react";
import style from "./style.module.css";

interface LinkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const LinkButton = (props: LinkButtonProps) => {
  const { children, ...rest } = props;
  return (
    <button type="button" className={style.button} {...rest}>
      {children}
    </button>
  );
};

export default LinkButton;
