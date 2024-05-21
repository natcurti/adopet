import styles from "./Button.module.scss";

interface IButton {
  type?: "submit" | "reset" | "button";
  children: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
}

const Button = ({ type, children, fullWidth, onClick }: IButton) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${
        fullWidth ? styles["btn-width"] : styles["btn-padding"]
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
