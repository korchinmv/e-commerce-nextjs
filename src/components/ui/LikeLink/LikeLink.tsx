"use client";
import { useState } from "react";
import { Heart } from "lucide-react";
import Link from "next/link";
import styles from "./LikeLink.module.scss";

interface ILikeLinkProps {
  path: string;
  label: string;
  heartSize: number;
}

const LikeLink = ({ path, label, heartSize }: ILikeLinkProps) => {
  const [countLikes, setCountLikes] = useState<number | null>(null);

  return (
    <Link
      className={`animation ${countLikes ? "like-active" : ""} ${
        styles.likeButton
      }`}
      aria-label={label}
      href={path}
    >
      <Heart size={heartSize} />
      {countLikes ? (
        <span className={styles.likeButton__count}>{countLikes}</span>
      ) : null}
    </Link>
  );
};

export default LikeLink;
