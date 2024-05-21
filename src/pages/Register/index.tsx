import styles from "./Register.module.scss";
import Input from "src/components/Input";
import Button from "src/components/Button";
import ContainerInnerPage from "src/components/ContainerInnerPage";
import IconPassword from "src/components/IconPassword";
import logo from "/assets/logo-adopet-blue.png";
import Text from "src/components/Text";
import Shape from "src/components/Shape";
import { useForm } from "react-hook-form";
import { IFormRegister } from "src/types/IFormRegister";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "src/components/ErrorMessage";
import formatName from "src/utils/formatName";

const validationSchema = z
  .object({
    email: z
      .string()
      .min(1, "Digite seu email")
      .email("Digite um email válido")
      .transform((value) => value.toLocaleLowerCase()),
    name: z
      .string()
      .min(3, "Digite seu nome")
      .transform((value) => formatName(value)),
    password: z.string().min(6, "Digite sua senha"),
    passwordRepeat: z.string().min(6, "Confirme sua senha"),
  })
  .refine((values) => values.password === values.passwordRepeat, {
    message: "As senhas não coincidem",
    path: ["passwordRepeat"],
  });

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormRegister>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
      passwordRepeat: "",
    },
    mode: "onTouched",
    resolver: zodResolver(validationSchema),
  });

  const onSubmitForm = (values: IFormRegister) => {
    console.log(values);
  };

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
            type="text"
            placeholder="Digite o seu nome completo"
            label="Nome"
            name="name"
            register={register}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          <Input
            type="password"
            placeholder="Digite a sua senha"
            label="Senha"
            name="password"
            register={register}
          >
            <IconPassword />
          </Input>
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
          <Input
            type="password"
            placeholder="Repita a senha"
            label="Confirme sua senha"
            name="passwordRepeat"
            register={register}
          >
            <IconPassword />
          </Input>
          {errors.passwordRepeat && (
            <ErrorMessage>{errors.passwordRepeat.message}</ErrorMessage>
          )}
          <div className={styles["container-button"]}>
            <Button type="submit" disabled={!isValid}>
              Cadastrar
            </Button>
          </div>
        </form>
      </main>
    </ContainerInnerPage>
  );
};

export default Register;
