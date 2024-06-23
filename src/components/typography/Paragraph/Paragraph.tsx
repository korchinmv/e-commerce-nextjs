import styles from "./Paragraph.module.scss";

interface IParagraphProps {
  text: string;
  css?: string;
}

const Paragraph = ({ text, css }: IParagraphProps) => {
  return <p className={`${styles.paragraph} ${css}`}>{text}</p>;
};

export default Paragraph;
