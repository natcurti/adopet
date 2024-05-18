import styles from "./Register.module.scss";
import Input from "src/components/Input";
import Button from "src/components/Button";
import ContainerInnerPage from "src/components/ContainerInnerPage";
import IconPassword from "src/components/IconPassword";

const Register = () => {
  return (
    <ContainerInnerPage isInWhichPage="register">
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
    </ContainerInnerPage>
  );
};

export default Register;
