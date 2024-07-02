import { TProduct } from "@/types/Product";
import Image from "next/image";
import styles from "./CartItem.module.scss";

interface ICartItemProps {
  product: TProduct;
}

const CartItem = ({ product }: ICartItemProps) => {
  console.log(product);

  return (
    <li>
      <Image
        className={styles.cartItem__image}
        src={product.image}
        width={200}
        height={200}
        alt={product.title}
      />
      <h3>{product.title}</h3>
    </li>
  );
};

export default CartItem;
