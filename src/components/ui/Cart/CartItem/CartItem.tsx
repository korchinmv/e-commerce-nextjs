import {
  addProductInCart,
  decreaseAmount,
  deleteProductFromCart,
  toggleStateCart,
} from "@/redux/features/cart/cartSlice";
import { CircleX, Minus, Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import { TProduct } from "@/types/Product";
import styles from "./CartItem.module.scss";
import Image from "next/image";
import Link from "next/link";

interface ICartItemProps {
  product: TProduct;
}

const CartItem = ({ product }: ICartItemProps) => {
  const dispatch = useDispatch();

  const handleDeleteBtnClick = (product: TProduct): any => {
    dispatch(deleteProductFromCart(product.id));
  };

  const handleLinkClick = (): void => {
    dispatch(toggleStateCart());
  };

  const handlePlusButton = (product: TProduct) => {
    dispatch(addProductInCart(product));
  };

  const handleMinusButton = (product: TProduct) => {
    if (product.amount < 2) {
      dispatch(deleteProductFromCart(product.id));
    } else {
      dispatch(decreaseAmount(product));
    }
  };

  return (
    <li className={styles.cartItem}>
      <Link
        className={styles.cartItem__link}
        href={`/product/${product.id}`}
        onClick={handleLinkClick}
      >
        <Image
          className={styles.cartItem__image}
          src={product.image}
          width={200}
          height={200}
          alt={product.title}
        />
      </Link>
      <div className={styles.cartItem__info}>
        <div className={styles.cartItem__topWrapper}>
          <h3 className={styles.cartItem__title}>{product.title}</h3>
          <button
            className={`${styles.cartItem__deleteBtn} animation`}
            onClick={() => handleDeleteBtnClick(product)}
          >
            <CircleX color='red' />
          </button>
        </div>

        <div className={styles.cartItem__bottomWrapper}>
          <div className='flex justify-center items-center bg-[--accent-color] transition-colors border border-[--accent-color]'>
            <button
              className='w-[25px] h-[25px] sm:w-[30px] h-[30px] flex justify-center items-center hover:opacity-70 transition-opacity'
              onClick={() => handleMinusButton(product)}
            >
              <Minus color='white' width={20} hanging={20} />
            </button>
            <span className='w-[25px] h-[25px] sm:w-[30px] h-[30px] text-[--accent-color] text-[16px] flex justify-center items-center h-full bg-[--white-color] '>
              {product.amount}
            </span>
            <button
              className='w-[25px] h-[25px] sm:w-[30px] h-[30px] flex justify-center items-center hover:opacity-70 transition-opacity'
              onClick={() => handlePlusButton(product)}
            >
              <Plus color='white' width={20} hanging={20} />
            </button>
          </div>

          <span className={styles.cartItem__price}>{`$ ${product.price}`}</span>
          <span className={styles.cartItem__totalPrice}>{`$ ${
            product.price * product.amount
          }`}</span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
