import Container from "../Container/Container";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section>
      <Container>
        <div className={`hero ${styles.hero}`}>
          <h1 className={styles.hero__title}>My Store</h1>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
