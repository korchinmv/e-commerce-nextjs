"use client";
import { cartSelector } from "@/redux/features/cart/cartSelector";
import { useAppSelector } from "@/redux/hooks";
import CloseButton from "../CloseButton/CloseButton";
import styles from "./Cart.module.scss";

const Cart = () => {
  const isOpen = useAppSelector(cartSelector);

  return (
    <div className={`${isOpen ? "right-0" : "-right-full"} ${styles.cart}`}>
      <div></div>
      {/* <CloseButton /> */}
    </div>
  );
};

export default Cart;
