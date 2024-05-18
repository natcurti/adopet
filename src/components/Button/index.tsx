import styles from "./Button.module.scss";

interface IButton {
  children: React.ReactNode;
}

const Button = ({ children }: IButton) => {
  return <button className={styles.btn}>{children}</button>;
};

export default Button;
