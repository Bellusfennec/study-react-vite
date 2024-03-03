import { Size } from "../../../../types";
import style from "./style.module.css";

interface FieldWrapperProps {
  children: React.ReactNode;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  scale?: Size;
}
const FieldWrapper = (props: FieldWrapperProps) => {
  const { children, label, description, error, required, scale = "md" } = props;

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
      {children}
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};

export default FieldWrapper;
