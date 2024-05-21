import ContainerInnerPage from "src/components/ContainerInnerPage";
import Input from "src/components/Input";
import Text from "src/components/Text";
import styles from "src/pages/Message&Profile/Message&Profile.module.scss";
import Button from "src/components/Button";
import Shape from "src/components/Shape";
import { Controller, useForm } from "react-hook-form";
import { IFormMessage } from "src/types/IFormMessage";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import formatName from "src/utils/formatName";
import ErrorMessage from "src/components/ErrorMessage";
import InputMaskField from "src/components/InputMaskField";

const validationSchema = z.object({
  name: z
    .string()
    .min(3, "Digite seu nome")
    .transform((value) => formatName(value)),
  phone: z.string().min(1, "Campo obrigatório"),
  animalName: z
    .string()
    .min(3, "Campo obrigatório")
    .transform((value) => formatName(value)),
  message: z
    .string()
    .min(1, "Campo obrigatório")
    .max(300, "Limite de caracteres atingido."),
});

const Message = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<IFormMessage>({
    defaultValues: {
      name: "",
      phone: "",
      animalName: "",
      message: "",
    },
    mode: "onTouched",
    resolver: zodResolver(validationSchema),
  });

  const onSubmitForm = (values: IFormMessage) => {
    console.log(values);
  };

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
        <form className={styles.form} onSubmit={handleSubmit(onSubmitForm)}>
          <Input
            label="Nome"
            placeholder="Insira o seu nome completo"
            type="text"
            isModelTwo
            name="name"
            register={register}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <InputMaskField
                mask="(99)99999-9999"
                label="Telefone"
                placeholder="Insira seu telefone ou whatsapp"
                {...field}
              />
            )}
          />
          {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
          <Input
            label="Nome do animal"
            placeholder="Por qual animal você se interessou?"
            type="text"
            isModelTwo
            name="animalName"
            register={register}
          />
          {errors.animalName && (
            <ErrorMessage>{errors.animalName.message}</ErrorMessage>
          )}
          <Input
            label="Mensagem"
            placeholder="Escreva sua mensagem"
            type="textarea"
            isModelTwo
            name="message"
            register={register}
          />
          {errors.message && (
            <ErrorMessage>{errors.message.message}</ErrorMessage>
          )}

          <div className={styles["container-button"]}>
            <Button type="submit" disabled={!isValid}>
              Enviar
            </Button>
          </div>
        </form>
      </main>
    </ContainerInnerPage>
  );
};

export default Message;
