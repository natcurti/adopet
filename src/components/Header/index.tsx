import shape from "src/components/Header/assets/shape-header-bigger.png";
import { GoHome } from "react-icons/go";
import { MdOutlineMailOutline } from "react-icons/md";
import Logo from "src/components/Header/assets/logo-adopet.svg?react";
import styles from "./Header.module.scss";

const Header = () => {
  const iconProps = {
    size: "25",
    color: "#FFF",
  };

  return (
    <header className={styles.header}>
      <img src={shape} alt="Forma ondulada em cor verde água" />
      <div className={styles["container-icons"]}>
        <Logo className={styles.logo} />
        <GoHome {...iconProps} />
        <MdOutlineMailOutline {...iconProps} />
      </div>
    </header>
  );
};

export default Header;
