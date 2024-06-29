import { fetchData } from "@/utils/fetchData";
import { Metadata } from "next";
import ProductsBlock from "@/components/ProductsBlock/ProductsBlock";
import Container from "@/components/Container/Container";
import HeroBlock from "@/components/HeroBlock/HeroBlock";
import Error from "@/components/Error/Error";

export const metadata: Metadata = {
  title: "E-commerce | Home page",
  description: "E-commerce app",
};

const HomePage = async () => {
  const { success: products, error: errorProducts } = await fetchData(
    "products"
  );
  const { success: categories } = await fetchData("products/categories");

  return (
    <>
      {errorProducts ? (
        <Container>
          <Error
            text='Error. Data not found.. =('
            css='text-center text-[26px]'
          />
        </Container>
      ) : (
        <>
          <HeroBlock />

          <ProductsBlock
            products={products}
            categories={categories}
            title='The Best Products'
          />
        </>
      )}
    </>
  );
};

export default HomePage;
