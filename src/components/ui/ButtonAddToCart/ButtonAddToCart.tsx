"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { toggleProduct } from "@/redux/features/cart/cartSlice";
import { cartSelector } from "@/redux/features/cart/cartSelector";
import { TProduct } from "@/types/Product";
import styles from "./ButtonAddToCart.module.scss";

interface IButtonAddToCartProps {
  product: TProduct;
  css?: string;
}

const ButtonAddToCart = ({ product }: IButtonAddToCartProps) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { cartProducts } = useAppSelector(cartSelector);
  const dispatch = useAppDispatch();

  const handleAddBtnClick = (product: TProduct): any => {
    dispatch(toggleProduct(product));
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <button
        className={styles.button}
        onClick={() => handleAddBtnClick(product)}
      >
        {cartProducts.some((p) => p.id === product.id)
          ? "Delete product"
          : "Add to cart"}
      </button>
    )
  );
};

export default ButtonAddToCart;
