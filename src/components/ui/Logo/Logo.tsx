import logoPick from "@/../public/logo.svg";
import styles from "./Logo.module.scss";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      className={`${styles.logo} animation`}
      href='/'
      aria-label='Back to home page'
    >
      <Image
        src={logoPick}
        priority
        alt='logo picture'
        width={50}
        height={50}
      />
    </Link>
  );
};

export default Logo;
