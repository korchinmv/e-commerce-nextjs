"use client";
import { toggleStateMobileMenu } from "@/redux/features/mobileMenu/mobileMenuSlice";
import { useAppDispatch } from "@/redux/hooks";
import styles from "./CloseButton.module.scss";

const CloseButton = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      className={styles.close}
      onClick={() => dispatch(toggleStateMobileMenu())}
    >
      X
    </button>
  );
};

export default CloseButton;
