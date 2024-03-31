import React, { InputHTMLAttributes } from "react";
import style from "./style.module.css";
import { toFirstUpperCase } from "../../../../utils/string";
import { Size, TextFiledType, TextFiledVariant } from "../../../../types";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  variant?: TextFiledVariant;
  scale?: Size;
  radius?: Size;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  type?: TextFiledType;
}

const TextField = (props: TextFieldProps) => {
  const { label, description, error, required, type = "text" } = props;
  const { scale = "md", radius = "md", variant = "default", startIcon, endIcon, ...rest } = props;

  return (
    <div className={style["size" + scale.toUpperCase()]}>
      {(label || description) && (
        <div className={style.title}>
          {label && (
            <p className={style.label}>
              {label} {required && <span className={style.required}>*</span>}
            </p>
          )}
          {description && <p className={style.description}>{description}</p>}
        </div>
      )}
      <label
        className={`${style.container} ${style["radius" + radius.toUpperCase()]} ${
          style["variant" + toFirstUpperCase(variant)]
        }`}
      >
        {startIcon && <div>{startIcon}</div>}
        <input type={type} className={style.input} required={required} {...rest} />
        {endIcon && endIcon}
      </label>
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};

export default TextField;
