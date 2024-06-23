import { fetchData } from "@/utils/fetchData";
import { Metadata } from "next";
import HeroBlock from "@/components/HeroBlock/HeroBlock";
import ProductsBlock from "@/components/ProductsBlock/ProductsBlock";

export const metadata: Metadata = {
  title: "E-commerce | Home page",
  description: "E-commerce app",
};

const HomePage = async () => {
  const { success, error } = await fetchData("products");

  return (
    <>
      <HeroBlock />
      <ProductsBlock products={success} />
    </>
  );
};

export default HomePage;
