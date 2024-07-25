import Menu from "../Menu/Menu";
import Logo from "../ui/Logo/Logo";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`${styles.header__content} container`}>
        <div className={styles.header__left}>
          <Logo />
        </div>
        <div className={styles.header__right}>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
