import ContainerInnerPage from "src/components/ContainerInnerPage";
import Input from "src/components/Input";
import IconPassword from "src/components/IconPassword";
import { Link } from "react-router-dom";
import Button from "src/components/Button";
import styles from "./Login.module.scss";
import logo from "/assets/logo-adopet-blue.png";
import Text from "src/components/Text";
import Shape from "src/components/Shape";

const Login = () => {
  return (
    <ContainerInnerPage isLoggedIn={false}>
      <h1 className={styles.title}>
        <img src={logo} alt="Logo simples escrito Adopet na cor azul." />
      </h1>
      <Text color="blue">Já tem conta? Faça seu login:</Text>
      <Shape />
      <form className={styles.form}>
        <Input
          type="email"
          placeholder="Digite o seu melhor email"
          label="Email"
        />
        <Input type="password" placeholder="Digite sua senha" label="Senha">
          <IconPassword />
        </Input>
        <Link to="" className={styles["forgot-password"]}>
          Esqueci minha senha
        </Link>
        <div className={styles["container-button"]}>
          <Button type="submit">Entrar</Button>
        </div>
      </form>
    </ContainerInnerPage>
  );
};

export default Login;
