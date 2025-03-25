import Head from "next/head";
import ProductsList from "../components/ProductsList";
import { getProducts } from "../utils/api";

const HomePage = ({ products }) => {
  products = products
    .filter((product) => product.status === "published")
    .sort((a, b) => (a.title > b.title ? 1 : -1));

  return (
    <div>
      <Head>
        <title>Online Bargains - Radio Plus</title>
      </Head>
      <div className="m-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8 bg-gray-100 py-8 px-6 shadow-md rounded-lg">
        <h1 className="col-span-full text-2xl font-bold text-center mb-4">
          Welcome to Online Bargains
        </h1>
        <p className="col-span-full text-sm text-gray-700 mb-4">
          <strong>
            Limit 1 certificate per business, per household every 30 days. You
            may only use 1 certificate per business visit and cannot combine 2
            certificates on the same bill.
          </strong>
        </p>
        <p className="col-span-full text-sm text-gray-700 mb-4">
          Bargains are available to purchase in person with cash/check at{" "}
          <strong>210 S Main Street</strong>, Monday - Friday, 8AM to 4PM.
        </p>
        <p className="col-span-full text-sm text-gray-700 text-center mb-6">
          For Waupun radio program deals,{" "}
          <a
            className="text-blue-600 underline"
            target="_blank"
            href="https://www.radioplusinfo.com/save-big-shop-our-bargains/"
            rel="noreferrer"
          >
            click here
          </a>
          .
        </p>
      </div>

      <ProductsList products={products} />
    </div>
  );
};

export async function getServerSideProps() {
  const products = await getProducts();
  return { props: { products } };
}

export default HomePage;
