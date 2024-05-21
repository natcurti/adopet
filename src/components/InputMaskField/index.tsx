import InputMask, { ReactInputMask } from "react-input-mask";
import styles from "./InputMaskField.module.scss";
import { forwardRef } from "react";

interface IInputMaskField {
  mask: string;
  label: string;
  placeholder: string;
}

const InputMaskField = forwardRef<ReactInputMask, IInputMaskField>(
  ({ mask, label, placeholder }: IInputMaskField, ref) => {
    return (
      <div>
        <label className={styles.label}>{label}</label>
        <InputMask
          mask={mask}
          className={styles.input}
          placeholder={placeholder}
          ref={ref}
        />
      </div>
    );
  }
);

export default InputMaskField;
