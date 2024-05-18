import styles from "./Text.module.scss";

interface IText {
  color: string;
  children: React.ReactNode;
}

const Text = ({ color, children }: IText) => {
  return (
    <p
      className={`${styles.text} ${
        color === "white" ? styles["text-white"] : styles["text-blue"]
      }`}
    >
      {children}
    </p>
  );
};

export default Text;
