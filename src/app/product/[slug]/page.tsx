import { fetchData } from "@/utils/fetchData";
import { Metadata } from "next";
import Container from "@/components/Container/Container";
import Rating from "@mui/material/Rating";
import Error from "@/components/Error/Error";
import Image from "next/image";
import Paragraph from "@/components/typography/Paragraph/Paragraph";
import Title from "@/components/typography/Title/Title";
import Button from "@/components/ui/Button/Button";

interface IProductPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params: { slug },
}: IProductPageProps): Promise<Metadata> {
  const { success, error } = await fetchData(`products/${slug}`);

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
  const { success: product, error } = await fetchData(`products/${slug}`);
  console.log(product);

  if (error) {
    return (
      <section>
        <Container>
          <Error
            text='Error. Data not found.. =('
            css='text-center text-[26px]'
          />
        </Container>
      </section>
    );
  }

  return (
    <section className='lg:py-[100px] py-[30px]'>
      <Container>
        <div className='flex flex-col lg:flex-row items-center justify-between'>
          <div className='mb-[40px] lg:mb-0 lg:mr-[30px] mr-0 shrink-0 border border-[--grey-light-color] rounded-md p-8 max-w-[500px] w-full'>
            <Image
              className='w-full'
              src={product.image}
              width={500}
              height={500}
              alt={`${product.title} image`}
            />
          </div>

          <div>
            <span className='text-[--grey-color]'>{product.category}</span>
            <Title text={product.title} css='mb-[10px]' />

            <div className='flex items-center mb-[30px]'>
              <span className='mr-[15px]'>Rating:</span>
              <Rating name='read-only' value={product.rating.rate} readOnly />
            </div>

            <Paragraph text={product.description} css='mb-[30px]' />

            <div className='flex items-center'>
              <span className='text-[26px] font-bold mr-[40px]'>{`$ ${product.price}`}</span>
              <Button text='Add to cart' label='Add to cart button' />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductPage;
