"use client";
import { toggleStateMobileMenu } from "@/redux/features/mobileMenu/mobileMenuSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import styles from "./MobileMenuLink.module.scss";

interface Props {
  name: string;
  href: string;
}

const MobileMenuLink = ({ name, href }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <li
      className={styles.menu__link}
      onClick={() => dispatch(toggleStateMobileMenu())}
    >
      <Link href={href}>{name}</Link>
    </li>
  );
};

export default MobileMenuLink;
