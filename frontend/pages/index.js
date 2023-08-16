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
        {/* <p>
          <small>
            Most certificates have a 30 day expiration, gift cards have no
            expiration date. We are not to be held liable if establishment
            closes before you use gift certificate, or if it expires before you
            get a chance to use it.
          </small>
        </p> */}
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
          <small>
            Bargains are available to purchase in person with cash/check at 210 S Main Street, M,W,F 8a-4p, T, Th 8a-1p.
          </small>
        </p>
      </div>
      <center style={{ marginBottom: '2em' }}>
        <small>For Waupun radio program deals, <a style={{ color: 'blue' }} target="_blank" href="https://www.radioplusinfo.com/save-big-shop-our-bargains/">click here</a>.</small>
      </center>
      {/* <center style={{ marginTop: '6em' }}>
        <h1 style={{ fontSize: '2em' }}>Online ordering is down for maintenance 🔧</h1>
        <h3>Bargains are available at 210 S Main St FDL</h3>
      </center> */}
      <ProductsList products={products} />
    </div>
  );
};

export async function getServerSideProps() {
  const products = await getProducts();
  return { props: { products } };
}

export default HomePage;
