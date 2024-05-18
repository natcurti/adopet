import styles from "./Text.module.scss";

interface IText {
  color: string;
  children: React.ReactNode;
}

const Text = ({ color, children }: IText) => {
  const textSyle = {
    color: color,
  };

  return (
    <p style={textSyle} className={styles.text}>
      {children}
    </p>
  );
};

export default Text;
