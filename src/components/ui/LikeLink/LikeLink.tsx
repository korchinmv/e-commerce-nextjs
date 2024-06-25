"use client";
import { favoritesProductsSelector } from "@/redux/features/favoritesProducts/favoritesProductsSelector";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { Heart } from "lucide-react";
import Link from "next/link";
import styles from "./LikeLink.module.scss";

interface ILikeLinkProps {
  path: string;
  label: string;
  heartSize: number;
}

const LikeLink = ({ path, label, heartSize }: ILikeLinkProps) => {
  const [qtyFavorites, setQtyFavorites] = useState<number>(0);
  const { totalFavoritesQuantity } = useAppSelector(favoritesProductsSelector);

  useEffect(() => {
    setQtyFavorites(totalFavoritesQuantity);
  }, [totalFavoritesQuantity]);

  return (
    <Link
      className={`animation ${qtyFavorites ? "like-active" : null} ${
        styles.likeButton
      }`}
      aria-label={label}
      href={path}
    >
      <Heart
        size={heartSize}
        fill={qtyFavorites ? "#de3333" : "#4f30b4"}
        color={qtyFavorites ? "#de3333" : "#4f30b4"}
      />
      {qtyFavorites ? (
        <span className={styles.likeButton__count}>{qtyFavorites}</span>
      ) : null}
    </Link>
  );
};

export default LikeLink;
