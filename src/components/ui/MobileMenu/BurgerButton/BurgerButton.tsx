"use client";
import { toggleStateMobileMenu } from "@/redux/features/mobileMenu/mobileMenuSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Menu } from "lucide-react";
import styles from "./BurgerButton.module.scss";

const BurgerButton = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      className={`${styles.burger} animation`}
      onClick={() => dispatch(toggleStateMobileMenu())}
    >
      <Menu size={34} />
    </button>
  );
};

export default BurgerButton;
