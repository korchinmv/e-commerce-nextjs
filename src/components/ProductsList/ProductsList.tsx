import { IProductsList } from "../ProductsBlock/ProductsBlock";
import { TProduct } from "@/types/Product";
import ProductCard from "../ui/ProductCard/ProductCard";
import styles from "./ProductsList.module.scss";

const ProductsList = ({ products, showProducts }: IProductsList) => {
  return (
    <ul className={styles.productsList}>
      {products.map((product: TProduct, index: number) => {
        if (showProducts) {
          if (index < showProducts) {
            return <ProductCard key={product.id} product={product} />;
          }
        }
      })}
    </ul>
  );
};
export default ProductsList;
