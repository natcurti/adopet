import styles from "./Input.module.scss";

interface IInput {
  label: string;
  placeholder: string;
  type: string;
  children?: React.ReactNode;
}

const Input = ({ label, placeholder, type, children }: IInput) => {
  return (
    <div className={styles["container-input"]}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
      {children}
    </div>
  );
};

export default Input;
