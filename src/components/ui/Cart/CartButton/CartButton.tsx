"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { toggleStateCart } from "@/redux/features/cart/cartSlice";
import { ShoppingCart } from "lucide-react";
import { cartSelector } from "@/redux/features/cart/cartSelector";
import styles from "./CartButton.module.scss";

interface ICartButtonProps {
  label: string;
  heartSize: number;
}

const CartButton = ({ label, heartSize }: ICartButtonProps) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { cartProducts } = useAppSelector(cartSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <button
        className={`animation ${cartProducts.length > 0 ? "cart-active" : ""} ${
          styles.buttonCart
        }`}
        aria-label={label}
        onClick={() => dispatch(toggleStateCart())}
      >
        <ShoppingCart size={heartSize} />
        {cartProducts.length > 0 ? (
          <span className={styles.buttonCart__count}>
            {cartProducts.length}
          </span>
        ) : null}
      </button>
    )
  );
};

export default CartButton;
