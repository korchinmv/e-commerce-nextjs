"use client";
import { useAppDispatch } from "@/redux/hooks";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { toggleState } from "@/redux/features/cart/cartSlice";
import styles from "./CartButton.module.scss";

interface ICartButtonProps {
  label: string;
  heartSize: number;
}

const CartButton = ({ label, heartSize }: ICartButtonProps) => {
  const [countLikes, setCountLikes] = useState<number | null>(null);
  const dispatch = useAppDispatch();

  return (
    <button
      className={`animation ${countLikes ? "active" : ""} ${styles.buttonCart}`}
      aria-label={label}
      onClick={() => dispatch(toggleState())}
    >
      <ShoppingCart size={heartSize} />
      {countLikes ? (
        <span className={styles.buttonCart__count}>{countLikes}</span>
      ) : null}
    </button>
  );
};

export default CartButton;
