import styles from "./Register.module.scss";
import Input from "src/components/Input";
import Button from "src/components/Button";
import ContainerInnerPage from "src/components/ContainerInnerPage";
import IconPassword from "src/components/IconPassword";
import logo from "/assets/logo-adopet-blue.png";
import Text from "src/components/Text";
import Shape from "src/components/Shape";

const Register = () => {
  return (
    <ContainerInnerPage isLoggedIn={false}>
      <h1 className={styles.title}>
        <img src={logo} alt="Logo simples escrito Adopet na cor azul." />
      </h1>
      <main className={styles.container}>
        <h2 className={styles.subtitle}>Ainda não tem cadastro?</h2>
        <Text color="blue">
          Então, antes de buscar seu melhor amigo, precisamos de alguns dados:
        </Text>
        <Shape />
        <form className={styles.form}>
          <Input
            type="email"
            placeholder="Digite o seu melhor email"
            label="Email"
          />
          <Input
            type="text"
            placeholder="Digite o seu nome completo"
            label="Nome"
          />
          <Input type="password" placeholder="Digite a sua senha" label="Senha">
            <IconPassword />
          </Input>
          <Input
            type="password"
            placeholder="Repita a senha"
            label="Confirme sua senha"
          >
            <IconPassword />
          </Input>
          <div className={styles["container-button"]}>
            <Button type="submit">Cadastrar</Button>
          </div>
        </form>
      </main>
    </ContainerInnerPage>
  );
};

export default Register;
