import styles from "./Subtitle.module.scss";

interface ISubtitleProps {
  text: string;
  css?: string;
}

const Subtitle = ({ text, css }: ISubtitleProps) => {
  return <h2 className={`${styles.subtitle} ${css}`}>{text}</h2>;
};

export default Subtitle;
