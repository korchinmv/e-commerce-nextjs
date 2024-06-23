import Container from "../Container/Container";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className={styles.footer__text}>
          Web-developer Korchin M.V. 2024 year
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
