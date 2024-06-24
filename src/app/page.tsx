import { fetchData } from "@/utils/fetchData";
import { Metadata } from "next";
import HeroBlock from "@/components/HeroBlock/HeroBlock";
import ProductsBlock from "@/components/ProductsBlock/ProductsBlock";
import Error from "@/components/Error/Error";
import Container from "@/components/Container/Container";

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
          <ProductsBlock products={success} />
        </>
      )}
    </>
  );
};

export default HomePage;
