import styles from "./ButtonGroup.module.css";

interface ButtonGroup {
  children: React.ReactNode;
}

const ButtonGroup = ({ children }: ButtonGroup) => {
  return <div className={styles.btnGroup}>{children}</div>;
};

export default ButtonGroup;
