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
      <div className="m-6 lg:w-1/2 md:w-2/3">
        <p>
          <small>
            Most certificates have a 30 day expiration, gift cards have no
            expiration date. We are not to be held liable if establishment
            closes before you use gift certificate, or if it expires before you
            get a chance to use it.
          </small>
        </p>
        <p>
          <small>
            <strong>
              Limit 1 certificate per business, per household every 30 days. You
              may only use 1 certificate per business visit and cannot combine 2
              certificates on the same bill.
            </strong>
          </small>
        </p>
        <p>
          <small>Sales tax and tip not included.</small>
        </p>
        {/* <h4 className="text-2xl font-extrabold text-gray-700">Rules</h4>
        <hr />
        <ul className="list-disc ml-5 mt-2">
          <li>
            Limit 2 packages. No more than 1 package per person/household.
          </li>
          <li>
            If your order is available, it will ship directly to you in 3
            business days.
          </li>
          <li>
            If your order is not available, you will receive credit on that purchase.
          </li>
          <li>
            For this sale, orders are sold online, and mailed to you. No office pick up required.
          </li>
        </ul> */}
      </div>
      <ProductsList products={products} />
      <center style={{ marginBottom: '2em' }}>
        <small>For Waupun radio program deals, <a style={{ color: 'blue' }} target="_blank" href="https://www.radioplusinfo.com/onlinebargains/">click here</a>.</small>
      </center>
    </div>
  );
};

export async function getServerSideProps() {
  const products = await getProducts();
  return { props: { products } };
}

export default HomePage;
