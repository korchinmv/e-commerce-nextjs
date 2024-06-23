"use client";
import { toggleStateMobileMenu } from "@/redux/features/mobileMenu/mobileMenuSlice";
import { mobileMenuSelector } from "@/redux/features/mobileMenu/mobileMenuSelector";
import { useAppSelector } from "@/redux/hooks";
import MobileMenuLink from "./MobileMenuLink/MobileMenuLink";
import CloseButton from "../CloseButton/CloseButton";
import styles from "./MobileMenu.module.scss";

const MobileMenu = () => {
  const isOpen = useAppSelector(mobileMenuSelector);

  return (
    <div
      className={`${styles.menu} ${
        isOpen ? "translate-x-[0]" : "translate-x-[100%]"
      }`}
    >
      <ul className={styles.menu__button}>
        <MobileMenuLink name='Home' href='/' />
        <MobileMenuLink name='Favorites' href='/favorites' />
      </ul>
      <CloseButton action={toggleStateMobileMenu} />
    </div>
  );
};

export default MobileMenu;
