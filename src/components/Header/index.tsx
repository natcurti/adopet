import shape from "src/components/Header/assets/shape-header-bigger.png";
import { GoHome } from "react-icons/go";
import { MdOutlineMailOutline } from "react-icons/md";
import Logo from "src/components/Header/assets/logo-adopet.svg?react";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const iconProps = {
    size: "25",
    color: "#FFF",
  };

  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <img src={shape} alt="Forma ondulada em cor verde água" />
      <div className={styles["container-icons"]}>
        <Logo className={styles.logo} />
        <button className={styles["btn-icon"]}>
          <GoHome
            {...iconProps}
            onClick={() => navigate("/")}
            className={styles.icon}
          />
        </button>
        <button className={styles["btn-icon"]}>
          <MdOutlineMailOutline
            {...iconProps}
            onClick={() => navigate("/mensagem")}
            className={styles.icon}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
