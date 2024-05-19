import shape from "src/components/Shape/shape.png";
import styles from "./Shape.module.scss";

interface IShape {
  className?: string;
}

const Shape = ({ className }: IShape) => {
  return (
    <img
      src={shape}
      alt="Forma ondulada na cor verde água"
      className={`${className ? styles["shape-home"] : styles.shape}`}
    />
  );
};

export default Shape;
