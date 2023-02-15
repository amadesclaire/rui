import WidthContainer from "../WidthContainer/WidthContainer";
import styles from "./Hero.module.css";

interface Hero {
  title: string;
  subtitle: string;
  color?: string;
  children?: React.ReactNode;
}

const Hero = ({
  title = "Title goes here",
  subtitle = "subtitle goes here",
  color,
  children,
}: Hero) => {
  return (
    <div className={styles.hero} style={{ backgroundColor: color }}>
      <WidthContainer>
        <h1 className={styles.title}>{title}</h1>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        {children}
      </WidthContainer>
    </div>
  );
};

export default Hero;
