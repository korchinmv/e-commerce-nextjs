import { Eye, Plus } from "lucide-react";
import { TProduct } from "@/types/Product";
import styles from "./ProductCard.module.scss";
import Image from "next/image";
import Link from "next/link";

interface IProductCardProps {
  product: TProduct;
}

const ProductCard = ({ product }: IProductCardProps) => {
  return (
    <li className={`${styles.card} group flex flex-col`}>
      <div
        className={`${styles.card__buttons} group-hover:right-5 group-hover:opacity-100`}
      >
        <button className='bg-[--white-color]'>
          <Plus color='#4f30b4' />
        </button>

        <Link href={`/product/${product.id}`}>
          <Eye color='#fff' />
        </Link>
      </div>
      <div className={styles.card__box}>
        <Image
          className='w-full h-[150px] object-contain transition duration-300 group-hover:scale-110 '
          src={product.image}
          width={500}
          height={500}
          alt={product.title}
          priority
        />
      </div>
      <span className={styles.card__category}>{product.category}</span>
      <h2 className={styles.card__title}>{product.title}</h2>
      <span className={styles.card__price}>{`${product.price}$`}</span>
    </li>
  );
};

export default ProductCard;
