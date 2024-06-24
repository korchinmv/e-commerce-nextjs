import styles from "./MoreButton.module.scss";

interface IMoreButtonProps {
  showMore: () => void;
  text: string;
}

const MoreButton = ({ showMore, text }: IMoreButtonProps) => {
  return (
    <button
      className={`${styles.buttonMore}`}
      aria-label='Add more products'
      onClick={showMore}
    >
      {text}
    </button>
  );
};

export default MoreButton;
