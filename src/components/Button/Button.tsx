import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "warning" | "link";

interface Button {
  text?: string;
  variant?: ButtonVariant;
  disabled?: boolean | undefined;
}

const Button = ({
  text = "Click me",
  variant = "primary",
  disabled = false,
}: Button) => {
  const style: any = [styles.btn, styles[`${variant}`]].join(" ");
  return (
    <button className={style} disabled={disabled} aria-label={text}>
      {text}
    </button>
  );
};

export default Button;

/*
  TODO; 
   Right and left Icon
   variants

   {
  text: string = "This is a button",
  variant: ButtonVariant = "default",
  disabled: Boolean = false,
}

*/
