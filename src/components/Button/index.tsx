import styles from "./Button.module.scss";

interface IButton {
  type?: "submit" | "reset" | "button";
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button = ({ type, children, fullWidth }: IButton) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${
        fullWidth ? styles["btn-width"] : styles["btn-padding"]
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
