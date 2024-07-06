"use client";
import {
  deleteAllProductsFromCart,
  toggleStateCart,
} from "@/redux/features/cart/cartSlice";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { cartSelector } from "@/redux/features/cart/cartSelector";
import { useDispatch } from "react-redux";
import { Trash2 } from "lucide-react";
import CloseButton from "../CloseButton/CloseButton";
import Paragraph from "@/components/typography/Paragraph/Paragraph";
import CartItem from "./CartItem/CartItem";
import Error from "@/components/Error/Error";
import styles from "./Cart.module.scss";

const Cart = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { isOpen, cartProducts, totalPrice } = useAppSelector(cartSelector);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(deleteAllProductsFromCart());
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <div className={`${isOpen ? "right-0" : "-right-full"} ${styles.cart}`}>
        <CloseButton
          action={toggleStateCart}
          css='hover:bg-[--accent-color] hover:text-[--white-color] transition-colors'
        />
        <Paragraph
          text={`Products in bag (${cartProducts.length})`}
          css='mb-[40px] mt-[18px] md:my-[15px] uppercase'
        />
        {cartProducts.length > 0 ? (
          <>
            <ul className={styles.cart__list}>
              {cartProducts.map((product) => {
                return <CartItem key={product.id} product={product} />;
              })}
            </ul>
            <div className={styles.cart__menu}>
              <div className={styles.cart__top}>
                <span
                  className={styles.cart__total}
                >{`Total: $ ${totalPrice.toFixed(2)}`}</span>
                <button
                  className={styles.cart__clearBtn}
                  onClick={handleClearCart}
                >
                  <Trash2 color='white' />
                </button>
              </div>
            </div>
          </>
        ) : (
          <Error text='Cart is clear' css='text-center mt-[70px]' />
        )}
      </div>
    )
  );
};

export default Cart;
