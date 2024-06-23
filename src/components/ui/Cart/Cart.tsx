"use client";
import { toggleStateCart } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { cartSelector } from "@/redux/features/cart/cartSelector";
import CloseButton from "../CloseButton/CloseButton";
import styles from "./Cart.module.scss";

const Cart = () => {
  const isOpen = useAppSelector(cartSelector);

  return (
    <div className={`${isOpen ? "right-0" : "-right-full"} ${styles.cart}`}>
      <div>CART</div>
      <CloseButton action={toggleStateCart} />
    </div>
  );
};

export default Cart;
