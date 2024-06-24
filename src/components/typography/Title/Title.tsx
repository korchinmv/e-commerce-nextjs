import styles from "./Title.module.scss";

interface ITitleProps {
  text: string;
  css?: string;
}

const Title = ({ text, css }: ITitleProps) => {
  return <h1 className={`${styles.title} ${css}`}>{text}</h1>;
};

export default Title;
