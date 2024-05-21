import styles from "./Input.module.scss";

interface IInput {
  label: string;
  placeholder?: string;
  type: string;
  isModelTwo?: boolean;
  children?: React.ReactNode;
}

const Input = ({
  label,
  placeholder,
  type,
  isModelTwo = false,
  children,
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
