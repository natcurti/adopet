import styles from "./InputFile.module.scss";
import { FaRegUser } from "react-icons/fa6";

interface IInputFile {
  label: string;
  id: string;
}

const InputFile = ({ label, id }: IInputFile) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{label}</p>
      <label htmlFor={id} className={styles.label}>
        <FaRegUser size={80} color="#36d6ad" />
      </label>
      <input id={id} type="file" className={styles.input} />
      <p className={styles.subtitle}>Clique acima para editar</p>
    </div>
  );
};

export default InputFile;
