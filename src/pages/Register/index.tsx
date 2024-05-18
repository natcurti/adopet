import Text from "src/components/Text";
import styles from "./Register.module.scss";
import logo from "/assets/logo-adopet-blue.png";
import paws from "/assets/paws.png";
import shape from "/assets/shape.png";
import Input from "src/components/Input";
import { IoMdEye } from "react-icons/io";
import Button from "src/components/Button";
// import { IoMdEyeOff } from "react-icons/io";

const Register = () => {
  return (
    <div className={styles.register}>
      <img
        src={paws}
        className={styles.paws}
        alt="Ilustração de três patinhas de animais"
      />
      <main className={styles["container-main"]}>
        <h1>
          <img src={logo} alt="Logo simples escrito Adopet na cor azul." />
        </h1>
        <h2>Ainda não tem cadastro?</h2>
        <Text color="blue">
          Então, antes de buscar seu melhor amigo, precisamos de alguns dados:
        </Text>
        <form>
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
            <IoMdEye className={styles.icon} />
          </Input>
          <Input
            type="password"
            placeholder="Repita a senha"
            label="Confirme sua senha"
          >
            <IoMdEye className={styles.icon} />
          </Input>
          <div className={styles["container-button"]}>
            <Button type="submit">Cadastrar</Button>
          </div>
        </form>
      </main>
      <img
        src={shape}
        alt="Forma ondulada na cor verde água"
        className={styles.shape}
      />
    </div>
  );
};

export default Register;
