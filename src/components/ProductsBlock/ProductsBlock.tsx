"use client";
import { favoritesProductsSelector } from "@/redux/features/favoritesProducts/favoritesProductsSelector";
import { filterProductsSelector } from "@/redux/features/filterProducts/filterProductsSelector";
import { Suspense, useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { getWindowWidth } from "@/utils/getWindowWidth";
import { usePathname } from "next/navigation";
import { TProduct } from "@/types/Product";
import ProductsList from "../ProductsList/ProductsList";
import Paragraph from "../typography/Paragraph/Paragraph";
import Container from "../Container/Container";
import Subtitle from "../typography/Subtitle/Subtitle";
import Button from "../ui/Button/Button";
import Filter from "../ui/Filter/Filter";
import styles from "./ProductsBlock.module.scss";
import {
  PRODUCTS_LIST_1280,
  PRODUCTS_LIST_480,
  SHOW_MORE_480,
  SHOW_MORE_768,
} from "@/utils/constants";
import { useDispatch } from "react-redux";
import { changeFiltredProducts } from "@/redux/features/filterProducts/filterProductsSlice";

export interface IProductsList {
  products?: TProduct[];
  showProducts?: number;
  title?: string;
  categories?: string[];
}

const ProductsBlock = ({ products, title, categories }: IProductsList) => {
  const [showProducts, setShowProducts] = useState<number>(0);
  const [displayWidth, setDisplayWidth] = useState(getWindowWidth());
  const { favoritesListProduct, totalFavoritesQuantity } = useAppSelector(
    favoritesProductsSelector
  );
  const { filtredProduct } = useAppSelector(filterProductsSelector);
  const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFiltredProducts(products !== undefined ? products : []));
  }, []);

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

          {pathname === "/favorites" && (
            <Paragraph
              text={
                totalFavoritesQuantity === 0
                  ? "There are no products in the list"
                  : `The total number of selected products is ${totalFavoritesQuantity}`
              }
              css='mb-[25px] md:mb-[55px] text-center'
            />
          )}
          {pathname === "/" && (
            <Suspense>
              <Filter categories={categories} css='mb-[25px] md:mb-[40px]' />
            </Suspense>
          )}

          <Suspense>
            <ProductsList
              products={
                pathname === "/favorites"
                  ? favoritesListProduct
                  : filtredProduct && filtredProduct.length !== 0
                  ? filtredProduct
                  : products
              }
              showProducts={showProducts}
            />
          </Suspense>

          {pathname === "/favorites" &&
            favoritesListProduct !== undefined &&
            favoritesListProduct.length > showProducts && (
              <Button
                handleClick={showMore}
                text='Show more..'
                label='Add more products'
              />
            )}

          {filtredProduct && filtredProduct.length > showProducts && (
            <Button
              handleClick={showMore}
              text='Show more..'
              label='Add more products'
            />
          )}
        </div>
      </Container>
    </section>
  );
};

export default ProductsBlock;
