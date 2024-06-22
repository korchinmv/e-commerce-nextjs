import BurgerButton from "../ui/MobileMenu/BurgerButton/BurgerButton";
import Container from "../Container/Container";
import styles from "./Header.module.scss";
import Logo from "@/components/ui/Logo/Logo";
import LikeLink from "../ui/LikeLink/LikeLink";
import CartButton from "../ui/Cart/CartButton/CartButton";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.header__nav}>
          <Logo />
          <div className={styles.header__buttons}>
            <LikeLink
              label='Go to favorites products page'
              path='/favorites'
              heartSize={32}
            />
            <CartButton label='Open cart' heartSize={32} />
            <BurgerButton />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
