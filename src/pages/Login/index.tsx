import ContainerInnerPage from "src/components/ContainerInnerPage";
import Input from "src/components/Input";
import IconPassword from "src/components/IconPassword";
import { Link } from "react-router-dom";
import Button from "src/components/Button";
import styles from "./Login.module.scss";
import logo from "/assets/logo-adopet-blue.png";
import Text from "src/components/Text";
import Shape from "src/components/Shape";
import { useForm } from "react-hook-form";
import { IFormLogin } from "src/types/IFormLogin";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "src/components/ErrorMessage";

const validationSchema = z.object({
  email: z
    .string()
    .min(1, "Email obrigatório")
    .email("Digite um email válido")
    .transform((value) => value.toLocaleLowerCase()),
  password: z.string().min(6, "Digite sua senha"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
    resolver: zodResolver(validationSchema),
  });

  const onSubmitForm = (values: IFormLogin) => {
    console.log(values);
  };

  return (
    <ContainerInnerPage isLoggedIn={false}>
      <h1 className={styles.title}>
        <img src={logo} alt="Logo simples escrito Adopet na cor azul." />
      </h1>
      <main className={styles.container}>
        <Text color="blue">Já tem conta? Faça seu login:</Text>
        <Shape />
        <form className={styles.form} onSubmit={handleSubmit(onSubmitForm)}>
          <Input
            type="email"
            placeholder="Digite o seu melhor email"
            label="Email"
            name="email"
            register={register}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          <Input
            type="password"
            placeholder="Digite sua senha"
            label="Senha"
            name="password"
            register={register}
          >
            <IconPassword />
          </Input>
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
          <Link to="" className={styles["forgot-password"]}>
            Esqueci minha senha
          </Link>
          <div className={styles["container-button"]}>
            <Button type="submit" disabled={!isValid}>
              Entrar
            </Button>
          </div>
        </form>
      </main>
    </ContainerInnerPage>
  );
};

export default Login;
