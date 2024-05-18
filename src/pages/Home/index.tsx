import Text from "src/components/Text";
import styles from "./Home.module.scss";
import logo from "/assets/logo-adopet.png";
import shape from "/assets/shape.png";
import illustration from "/assets/illustration-pets.png";
import Button from "src/components/Button";

const Home = () => {
  return (
    <div className={styles.home}>
      <img
        src={shape}
        alt="Forma ondulada na cor verde água"
        className={styles.shape}
      />
      <main className={styles["container-main"]}>
        <h1>
          <img src={logo} alt="Logo simples escrito Adopet na cor branca." />
        </h1>
        <h2>Boas vindas!</h2>
        <Text color="white">
          Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a
          gente!
        </Text>
        <div className={styles["container-buttons"]}>
          <Button fullWidth type="button">
            Já tenho conta
          </Button>
          <Button fullWidth type="button">
            Quero me cadastrar
          </Button>
        </div>
        <img
          src={illustration}
          alt="Ilustração de um cachorro e um gato na cor branca em um fundo redondo verde água."
          className={styles.illustration}
        />
      </main>
    </div>
  );
};

export default Home;
