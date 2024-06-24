"use client";
import { useEffect, useState } from "react";
import { getWindowWidth } from "@/utils/getWindowWidth";
import { TProduct } from "@/types/Product";
import ProductsList from "../ProductsList/ProductsList";
import Container from "../Container/Container";
import Button from "../ui/Button/Button";
import Subtitle from "../typography/Subtitle/Subtitle";
import styles from "./ProductsBlock.module.scss";
import {
  PRODUCTS_LIST_1280,
  PRODUCTS_LIST_480,
  SHOW_MORE_480,
  SHOW_MORE_768,
} from "@/utils/constants";

export interface IProductsList {
  products: TProduct[];
  showProducts?: number;
}

const ProductsBlock = ({ products }: IProductsList) => {
  const [showProducts, setShowProducts] = useState<number>(0);
  const [displayWidth, setDisplayWidth] = useState(getWindowWidth());

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
          <Subtitle text='The Best Products' css='mb-[25px] md:mb-[50px]' />
          <ProductsList products={products} showProducts={showProducts} />

          {products.length > showProducts ? (
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
