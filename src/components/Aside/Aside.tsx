/* TypeScript file */
import styles from './Aside.module.css';

interface AsideProps {
  header?: React.ReactNode;
  nav?: React.ReactNode;
  footer?: React.ReactNode;
}

const Aside = ({ header, nav, footer }: AsideProps) => {
  return (
    <div className={styles.aside}>
      {header}
      {nav}
      {footer}
    </div>
  );
};

export default Aside;
