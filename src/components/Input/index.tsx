import { Path, UseFormRegister } from "react-hook-form";
import styles from "./Input.module.scss";
import { IFormLogin } from "src/types/IFormLogin";

interface IInput {
  label: string;
  type: string;
  name: Path<IFormLogin>;
  register: UseFormRegister<IFormLogin>;
  placeholder?: string;
  isModelTwo?: boolean;
  children?: React.ReactNode;
}

const Input = ({
  label,
  type,
  name,
  placeholder,
  isModelTwo = false,
  children,
  register,
}: IInput) => {
  return (
    <div className={`${!isModelTwo && styles["container-input"]}`}>
      <label
        className={`${styles.label} ${isModelTwo && styles["label-model-two"]}`}
      >
        {label}
      </label>
      {!(type === "textarea") && (
        <input
          className={`${styles.input} ${
            isModelTwo && styles["input-model-two"]
          } `}
          type={type}
          placeholder={placeholder}
          {...register(name)}
        />
      )}
      {type === "textarea" && (
        <textarea
          className={styles.textarea}
          placeholder={placeholder}
          rows={10}
        ></textarea>
      )}

      {children}
    </div>
  );
};

export default Input;
