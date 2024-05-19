import ContainerInnerPage from "src/components/ContainerInnerPage";
import Input from "src/components/Input";
import Text from "src/components/Text";
import styles from "./Message.module.scss";
import Button from "src/components/Button";
import Shape from "src/components/Shape";

const Message = () => {
  return (
    <ContainerInnerPage isLoggedIn>
      <h1 className={styles.text}>
        <Text color="blue">
          Envie uma mensagem para a pessoa ou instituição que está cuidando do
          animal:
        </Text>
      </h1>
      <main className={styles.container}>
        <div className={styles.shape}>
          <Shape />
        </div>
        <form className={styles.form}>
          <Input
            label="Nome"
            placeholder="Insira o seu nome completo"
            type="text"
            isModelTwo
          />
          <Input
            label="Telefone"
            placeholder="Insira seu telefone ou whatsapp"
            type="text"
            isModelTwo
          />
          <Input
            label="Nome do animal"
            placeholder="Por qual animal você se interessou?"
            type="text"
            isModelTwo
          />
          <Input
            label="Mensagem"
            placeholder="Escreva sua mensagem"
            type="textarea"
            isModelTwo
          />
          <div className={styles["container-button"]}>
            <Button type="submit">Enviar</Button>
          </div>
        </form>
      </main>
    </ContainerInnerPage>
  );
};

export default Message;
