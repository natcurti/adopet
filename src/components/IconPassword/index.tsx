import styles from "./IconPassword.module.scss";
import { IoMdEye } from "react-icons/io";

const IconPassword = () => {
  return (
    <button className={styles.container}>
      <IoMdEye className={styles.icon} />
    </button>
  );
};

export default IconPassword;
