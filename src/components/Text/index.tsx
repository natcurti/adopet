import styles from "./Text.module.scss";

interface IText {
  size: string;
  color: string;
  children: React.ReactNode;
}

const Text = ({ size, color, children }: IText) => {
  const textSyle = {
    color: color,
    fontSize: size,
  };

  return (
    <p style={textSyle} className={styles.text}>
      {children}
    </p>
  );
};

export default Text;
