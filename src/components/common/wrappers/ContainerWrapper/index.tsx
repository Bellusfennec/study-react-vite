import style from "./style.module.css";

interface ContainerWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const ContainerWrapper = (props: ContainerWrapperProps) => {
  const { children, className } = props;
  return <div className={style.container + (className ? ` ${className}` : "")}>{children}</div>;
};

export default ContainerWrapper;
