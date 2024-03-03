import { InputHTMLAttributes } from "react";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  label?: string;
  name?: string;
  value?: string;
  description?: string;
  error?: string;
  isRequired?: boolean;
  variant?: "default" | "filled" | "unstyled";
  size1?: Size;
  radius?: Size;
}

const TextField = (props: TextFieldProps) => {
  const { placeholder, label, description, error, isRequired, ...rest } = props;
  return (
    <div>
      <input {...rest} />
    </div>
  );
};

export default TextField;
