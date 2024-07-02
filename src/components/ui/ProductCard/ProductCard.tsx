import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { favoritesProductsSelector } from "@/redux/features/favoritesProducts/favoritesProductsSelector";
import { addProductInCart } from "@/redux/features/cart/cartSlice";
import { Check, Eye, Plus } from "lucide-react";
import { cartSelector } from "@/redux/features/cart/cartSelector";
import { TProduct } from "@/types/Product";
import ButtonLike from "../ButtonLike/ButtonLike";
import styles from "./ProductCard.module.scss";
import Image from "next/image";
import Link from "next/link";

interface IProductCardProps {
  product: TProduct;
}

const ProductCard = ({ product }: IProductCardProps) => {
  const { favoritesListProduct } = useAppSelector(favoritesProductsSelector);
  const { cartProducts } = useAppSelector(cartSelector);
  const dispatch = useAppDispatch();

  const handleAddBtnClick = (product: TProduct): any => {
    dispatch(addProductInCart(product));
  };

  return (
    <li className={`${styles.card} group flex flex-col`}>
      {favoritesListProduct.some((p) => p.id === product.id) ? (
        <ButtonLike
          product={product}
          css='
					absolute top-2 left-2 w-[35px] h-[35px] p-[8px]'
        />
      ) : null}

      <div
        className={`${styles.card__buttons} group-hover:right-5 group-hover:opacity-100`}
      >
        <button
          className='bg-[--white-color]'
          onClick={() => handleAddBtnClick(product)}
          disabled={
            cartProducts.some((p) => p.id === product.id) ? true : false
          }
        >
          {cartProducts.some((p) => p.id === product.id) ? (
            <Check color='#4f30b4' />
          ) : (
            <Plus color='#4f30b4' />
          )}
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
