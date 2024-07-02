"use client";
import { useEffect, useState } from "react";
import { toggleStateCart } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { cartSelector } from "@/redux/features/cart/cartSelector";
import CloseButton from "../CloseButton/CloseButton";
import Paragraph from "@/components/typography/Paragraph/Paragraph";
import styles from "./Cart.module.scss";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  const { isOpen, cartProducts } = useAppSelector(cartSelector);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <div className={`${isOpen ? "right-0" : "-right-full"} ${styles.cart}`}>
        <CloseButton
          action={toggleStateCart}
          css='hover:bg-[--accent-color] hover:text-[--white-color] transition-colors'
        />
        <Paragraph
          text={`Products in bag (${cartProducts.length})`}
          css='mb-[40px] mt-[21px] md:my-[15px] uppercase'
        />
        <ul className={styles.cart__list}>
          {cartProducts.map((product) => {
            return <CartItem key={product.id} product={product} />;
          })}
        </ul>
      </div>
    )
  );
};

export default Cart;
