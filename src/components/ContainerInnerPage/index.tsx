import Text from "src/components/Text";
import styles from "./ContainerInnerPage.module.scss";
import logo from "/assets/logo-adopet-blue.png";
import paws from "/assets/paws.png";
import shape from "/assets/shape.png";

interface IContainerRegisterAndLogin {
  children: React.ReactNode;
  isInWhichPage: "register" | "login" | "message" | "profile" | "inner-home";
}

const ContainerInnerPage = ({
  children,
  isInWhichPage,
}: IContainerRegisterAndLogin) => {
  return (
    <div className={styles.container}>
      <img
        src={paws}
        className={styles.paws}
        alt="Ilustração de três patinhas de animais"
      />
      <main className={styles["container-main"]}>
        <h1>
          <img src={logo} alt="Logo simples escrito Adopet na cor azul." />
        </h1>
        {isInWhichPage === "register" && <h2>Ainda não tem cadastro?</h2>}
        <Text color="blue">
          {isInWhichPage === "register"
            ? "Então, antes de buscar seu melhor amigo, precisamos de alguns dados:"
            : "Já tem conta? Faça seu login:"}
        </Text>
        <form>{children}</form>
      </main>
      <img
        src={shape}
        alt="Forma ondulada na cor verde água"
        className={styles.shape}
      />
    </div>
  );
};

export default ContainerInnerPage;
