import styles from "./Button.module.scss";

interface IButton {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ children, type, fullWidth, onClick, disabled }: IButton) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${
        fullWidth ? styles["btn-width"] : styles["btn-padding"]
      }
      ${disabled && styles.disabled}
      
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
