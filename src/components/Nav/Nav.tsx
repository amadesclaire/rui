/* TypeScript file */
/* TypeScript file */
import styles from './Nav.module.css';

interface NavProps {
  children?: React.ReactNode;
}

const Nav = ({ children }: NavProps) => {
  return (
    <nav className={styles.nav}>
      <ul>{children}</ul>
    </nav>
  );
};

export default Nav;
