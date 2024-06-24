import { fetchData } from "@/utils/fetchData";
import { Metadata } from "next";
import Container from "@/components/Container/Container";
import { notFound } from "next/navigation";
import Error from "@/components/Error/Error";

interface IProductPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params: { slug },
}: IProductPageProps): Promise<Metadata> {
  const { success, error } = await fetchData(`products/${slug}`);
  console.log(error);

  if (error) {
    return {
      title: "E-commerce | Error",
      description: "E-commerce app",
    };
  }

  return {
    title: `E-commerce | ${success.title} product page`,
    description: "E-commerce app",
  };
}

const ProductPage = async ({ params: { slug } }: IProductPageProps) => {
  const { success, error } = await fetchData(`products/${slug}`);

  if (error) {
    return (
      <section>
        <Container>
          <Error text='Error' />
        </Container>
      </section>
    );
  }

  return (
    <section>
      <Container>
        <h1>{success.title}</h1>
      </Container>
    </section>
  );
};

export default ProductPage;
