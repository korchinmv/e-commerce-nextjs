import { TProduct } from "@/types/Product";
import ProductsList from "../ProductsList/ProductsList";
import Container from "../Container/Container";

export interface IProductsList {
  products: TProduct[];
}

const ProductsBlock = ({ products }: IProductsList) => {
  return (
    <section className='mb-[40px]'>
      <Container>
        <ProductsList products={products} />
      </Container>
    </section>
  );
};

export default ProductsBlock;
