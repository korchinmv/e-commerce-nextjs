"use client";
import { favoritesProductsSelector } from "@/redux/features/favoritesProducts/favoritesProductsSelector";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { getWindowWidth } from "@/utils/getWindowWidth";
import { TProduct } from "@/types/Product";
import ProductsList from "../ProductsList/ProductsList";
import Container from "../Container/Container";
import Subtitle from "../typography/Subtitle/Subtitle";
import Button from "../ui/Button/Button";
import styles from "./ProductsBlock.module.scss";
import {
  PRODUCTS_LIST_1280,
  PRODUCTS_LIST_480,
  SHOW_MORE_480,
  SHOW_MORE_768,
} from "@/utils/constants";
import { usePathname } from "next/navigation";
import Paragraph from "../typography/Paragraph/Paragraph";

export interface IProductsList {
  products?: TProduct[];
  showProducts?: number;
  title?: string;
}

const ProductsBlock = ({ products, title }: IProductsList) => {
  const [showProducts, setShowProducts] = useState<number>(0);
  const [displayWidth, setDisplayWidth] = useState(getWindowWidth());
  const { favoritesListProduct, totalFavoritesQuantity } = useAppSelector(
    favoritesProductsSelector
  );
  const pathname = usePathname();

  const showMore = () => {
    if (displayWidth >= 768) {
      setShowProducts(showProducts + SHOW_MORE_768);
    } else if (displayWidth < 480) {
      setShowProducts(showProducts + SHOW_MORE_480);
    }
  };

  useEffect(() => {
    const showCount = () => {
      if (displayWidth > 768) {
        setShowProducts(PRODUCTS_LIST_1280);
      } else if (displayWidth < 480) {
        setShowProducts(PRODUCTS_LIST_480);
      }
    };

    showCount();
  }, [displayWidth, products]);

  const handleResize = () => {
    setDisplayWidth(window.innerWidth);
  };

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", handleResize);
    }, 500);
  });

  return (
    <section className={styles.products}>
      <Container>
        <div className={styles.products__wrapper}>
          <Subtitle text={title} css='mb-[25px] md:mb-[50px] text-center' />
          {totalFavoritesQuantity > 0 && (
            <Paragraph
              text={`The total number of selected products is ${totalFavoritesQuantity}`}
              css='mb-[25px] md:mb-[55px] text-center'
            />
          )}

          <ProductsList
            products={
              pathname === "/favorites" ? favoritesListProduct : products
            }
            showProducts={showProducts}
          />

          {(products && products?.length) ||
          favoritesListProduct.length > showProducts ? (
            <Button
              handleClick={showMore}
              text='Show more..'
              label='Add more products'
            />
          ) : null}
        </div>
      </Container>
    </section>
  );
};

export default ProductsBlock;
