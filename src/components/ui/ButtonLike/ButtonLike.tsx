"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { favoritesProductsSelector } from "@/redux/features/favoritesProducts/favoritesProductsSelector";
import { toggleLikeProduct } from "@/redux/features/favoritesProducts/favoritesProductsSlice";
import { ThumbsUp } from "lucide-react";
import { TProduct } from "@/types/Product";
import styles from "./ButtonLike.module.scss";
import { useEffect, useState } from "react";

interface IButtonLikeProps {
  product: TProduct;
  css?: string;
}

const ButtonLike = ({ product, css }: IButtonLikeProps) => {
  const { favoritesListProduct } = useAppSelector(favoritesProductsSelector);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dispatch = useAppDispatch();

  const handleLikeBtnClick = () => {
    dispatch(toggleLikeProduct(product));
  };

  return (
    mounted && (
      <button
        className={`${
          favoritesListProduct.some((p) => p.id === product.id)
            ? "bg-[--red-color]"
            : "bg-[--grey-color]"
        } ${styles.buttonLike} ${css}`}
        onClick={() => handleLikeBtnClick()}
        aria-label='Add to favorites product list'
      >
        <ThumbsUp color='white' />
      </button>
    )
  );
};

export default ButtonLike;
