import { IAnimals } from "src/types/IAnimals";
import icon from "src/components/CardAnimal/assets/msg-icon.png";
import styles from "./CardAnimal.module.scss";

const CardAnimal = ({
  name,
  age,
  size,
  characteristics,
  city,
  image,
}: IAnimals) => {
  return (
    <div className={styles.container}>
      <img src={image} alt={`Imagem de: ${name}`} className={styles.photo} />
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.details}>
        <p>{age}</p>
        <p>{size}</p>
        <p>{characteristics}</p>
      </div>
      <div className={styles.guardian}>
        <p>{city}</p>
        <div>
          <img src={icon} alt="Ícone de balão de fala na cor verde água." />
          <p>Fale com o responsável</p>
        </div>
      </div>
    </div>
  );
};

export default CardAnimal;
