/* TypeScript file */
import { HTMLAttributeReferrerPolicy } from 'react';
import styles from './NavItem.module.css';

interface Sublist {
  text: string;
  href: string;
}

interface NavItemProps {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  text: string;
  href?: string;
}

const NavItem = ({ iconLeft, iconRight, text, href }: NavItemProps) => {
  return (
    <li className={styles.NavItem}>
      <a href={href}>
        {iconLeft}
        <span>{text}</span>
        {iconRight}
      </a>
    </li>
  );
};

export default NavItem;
