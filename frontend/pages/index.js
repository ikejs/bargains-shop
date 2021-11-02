import Head from "next/head";
import ProductsList from "../components/ProductsList";
import { getProducts } from "../utils/api";

const HomePage = ({ products }) => {
  products = products
    .filter((product) => product.status === "published")
    .sort((a, b) => (a.title > b.title ? 1 : -1));

    console.log(products);

  return (
    <div>
      <Head>
        <title>Online Bargains - Radio Plus</title>
      </Head>
      <ProductsList products={products} />
    </div>
  );
};

export async function getServerSideProps() {
  const products = await getProducts();
  return { props: { products } };
}

export default HomePage;
