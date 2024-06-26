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
  const { success, error } = await fetchData("products");

  return (
    <>
      {error ? (
        <Container>
          <Error
            text='Error. Data not found.. =('
            css='text-center text-[26px]'
          />
        </Container>
      ) : (
        <>
          <HeroBlock />
          <ProductsBlock products={success} title='The Best Products' />
        </>
      )}
    </>
  );
};

export default HomePage;
