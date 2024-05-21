import { Path, UseFormRegister, FieldValues } from "react-hook-form";
import styles from "./Input.module.scss";

interface IInput<T extends FieldValues> {
  label: string;
  type: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  placeholder?: string;
  isModelTwo?: boolean;
  children?: React.ReactNode;
}

const Input = <T extends FieldValues>({
  label,
  type,
  name,
  placeholder,
  isModelTwo = false,
  children,
  register,
}: IInput<T>) => {
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
