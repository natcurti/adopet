import ContainerInnerPage from "src/components/ContainerInnerPage";
import Input from "src/components/Input";
import IconPassword from "src/components/IconPassword";
import { Link } from "react-router-dom";
import Button from "src/components/Button";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <ContainerInnerPage isInWhichPage="login">
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
    </ContainerInnerPage>
  );
};

export default Login;
