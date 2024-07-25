import styles from "./styles.module.scss";

import Logo from "../ui/Logo/Logo";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles.footer__content} container`}>
        <div>
          <Logo />
        </div>
        <div className={styles.footer__c}>(c) Colors Shop 2024</div>
      </div>
    </div>
  );
};

export default Footer;
