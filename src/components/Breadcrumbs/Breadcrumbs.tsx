import styles from "./Breadcrumbs.module.css";

interface Breadcrumbs {
  children?: React.ReactNode;
}

interface Breadcrumb {
  text: string;
  children?: React.ReactNode;
}

const Breadcrumb = ({ children }: Breadcrumb) => {
  return (
    <li>
      <a href="www.google.com">Home</a>
    </li>
  );
};

const Breadcrumbs = ({ children }: Breadcrumbs) => {
  return (
    <div className={styles.breadcrumbs}>
      <ol>
        <li>
          <a href="www.google.com">Home</a>
        </li>
        <li>
          <a href="www.google.com">Benefits</a>
        </li>
      </ol>
    </div>
  );
};

export default Breadcrumbs;
