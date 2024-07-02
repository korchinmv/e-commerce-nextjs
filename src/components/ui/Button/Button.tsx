"use client";
import styles from "./Button.module.scss";

interface IButtonProps {
  handleClick?: () => void;
  text: string;
  label: string;
}

const Button = ({ handleClick, text, label }: IButtonProps) => {
  return (
    <button
      className={`${styles.button}`}
      aria-label={label}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
