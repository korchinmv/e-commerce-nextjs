import { IProductsList } from "../ProductsBlock/ProductsBlock";
import { TProduct } from "@/types/Product";
import ProductCard from "../ui/ProductCard/ProductCard";
import Error from "@/components/Error/Error";
import styles from "./ProductsList.module.scss";

const ProductsList = ({ products, showProducts }: IProductsList) => {
  return (
    <>
      {products !== undefined ? (
        <ul className={styles.productsList}>
          {products!.map((product: TProduct, index: number) => {
            if (showProducts) {
              if (index < showProducts) {
                return <ProductCard key={product.id} product={product} />;
              }
            }
          })}
        </ul>
      ) : (
        <Error text='There are no products in the list' />
      )}
    </>
  );
};
export default ProductsList;
