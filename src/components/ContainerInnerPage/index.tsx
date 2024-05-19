import styles from "./ContainerInnerPage.module.scss";
import paws from "src/components/ContainerInnerPage/assets/paws.png";
import user from "src/components/ContainerInnerPage/assets/user-logo.png";

interface IContainerRegisterAndLogin {
  children: React.ReactNode;
  isLoggedIn: boolean;
}

const ContainerInnerPage = ({
  children,
  isLoggedIn,
}: IContainerRegisterAndLogin) => {
  return (
    <div className={styles.container}>
      {!isLoggedIn && (
        <img
          src={paws}
          className={styles.paws}
          alt="Ilustração de três patinhas de animais"
        />
      )}

      {isLoggedIn && (
        <img
          src={user}
          className={styles.user}
          alt="Logo de usuário na cor branca e verde água"
        />
      )}

      <main className={styles["container-main"]}>{children}</main>
    </div>
  );
};

export default ContainerInnerPage;
