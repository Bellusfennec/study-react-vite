import React, { FormHTMLAttributes } from "react";
import style from "./style.module.css";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  className?: string;
  ref?: any;
}

const Form = React.forwardRef((props: FormProps, ref) => {
  const { children, className, ...rest } = props;
  return (
    <form ref={ref} className={style.form + (className ? ` ${className}` : "")} {...rest}>
      {children}
    </form>
  );
});

export default Form;
