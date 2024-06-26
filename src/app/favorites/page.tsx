import { Metadata } from "next";
import ProductsBlock from "@/components/ProductsBlock/ProductsBlock";

export const metadata: Metadata = {
  title: "E-commerce | Favorites page",
  description: "E-commerce app",
};

const FavoritesPage = () => {
  return <ProductsBlock title='Your favorites products list' />;
};

export default FavoritesPage;
