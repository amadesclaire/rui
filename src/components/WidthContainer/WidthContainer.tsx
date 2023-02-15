import styles from "./WidthContainer.module.css";

interface WidthContainer {
  children: React.ReactNode;
}

const WidthContainer = ({ children }: WidthContainer) => {
  return <div className={styles.WidthContainer}>{children}</div>;
};

export default WidthContainer;
