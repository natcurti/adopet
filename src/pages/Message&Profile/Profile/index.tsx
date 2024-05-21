import ContainerInnerPage from "src/components/ContainerInnerPage";
import Input from "src/components/Input";
import styles from "src/pages/Message&Profile/Message&Profile.module.scss";
import Shape from "src/components/Shape";
import InputFile from "src/components/InputFile";
import Button from "src/components/Button";

const Profile = () => {
  return (
    <ContainerInnerPage isLoggedIn>
      <main className={styles.container}>
        <div className={styles.shape}>
          <Shape />
        </div>
        <form className={styles.form}>
          <h1 className={styles.title}>Perfil</h1>
          <InputFile label="Foto" id="profile-pic" />
          <Input
            label="Nome"
            placeholder="Digite seu nome"
            type="text"
            isModelTwo
          />
          <Input
            label="Telefone"
            placeholder="Digite seu telefone"
            type="text"
            isModelTwo
          />
          <Input
            label="Cidade"
            placeholder="Digite sua cidade"
            type="text"
            isModelTwo
          />
          <Input
            label="Sobre"
            placeholder="Sobre mim"
            type="textarea"
            isModelTwo
          />
          <div className={styles["container-button"]}>
            <Button type="submit">Salvar</Button>
          </div>
        </form>
      </main>
    </ContainerInnerPage>
  );
};

export default Profile;
