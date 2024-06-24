import Container from "../Container/Container";
import Paragraph from "../typography/Paragraph/Paragraph";
import Title from "../typography/Title/Title";
import styles from "./HeroBlock.module.scss";

const HeroBlock = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={`hero ${styles.hero__bg}`}>
          <Title text='My Store' css='md:mb-[20px] mb-[10px]' />
          <Paragraph
            text='Distinguished shopping for the discerning customer. We offer the lowest prices, you will not find cheaper!'
            css='sm:w-[400px] w-[150px]'
          />
        </div>
      </Container>
    </section>
  );
};

export default HeroBlock;
