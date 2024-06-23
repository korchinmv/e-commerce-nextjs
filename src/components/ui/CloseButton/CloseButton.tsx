"use client";
import { useAppDispatch } from "@/redux/hooks";
import styles from "./CloseButton.module.scss";
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";

interface ICloseButtonProps {
  action: ActionCreatorWithoutPayload<
    "menu/toggleStateMobileMenu" | "cart/toggleStateCart"
  >;
}

const CloseButton = ({ action }: ICloseButtonProps) => {
  const dispatch = useAppDispatch();

  return (
    <button className={styles.close} onClick={() => dispatch(action())}>
      X
    </button>
  );
};

export default CloseButton;
