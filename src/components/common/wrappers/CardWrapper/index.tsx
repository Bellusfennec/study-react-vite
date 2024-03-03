import style from "./style.module.css";

interface CardWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const CardWrapper = (props: CardWrapperProps) => {
  const { children, className } = props;
  return <div className={style.container + (className ? ` ${className}` : "")}>{children}</div>;
};

export default CardWrapper;
