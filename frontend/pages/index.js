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
          >
            click here
          </a>
          .
        </p>

        <div className="col-span-full border-t border-gray-300 mt-6 pt-4">
          <div className="col-span-full mb-6">
            {/* Banner Image */}
            <img
              src="/ski-banner.png"
              alt="Ski Brule and Salvation Army Banner"
              className="w-full rounded-md shadow-lg"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">
            Ski Brule Offers (purchase in-person only)
          </h2>
          <p className="text-sm text-gray-700 mb-4">
            WFDL/WTCX have donated the following to the Salvation Army Red
            Kettle Campaign
            <br />
            <strong>(NOT VALID 12/24-1/5/25)</strong>
          </p>

          <p className="text-sm text-blue-700 my-4">
            Email <strong>laurie@wfdl.com</strong> to order
            <br />
            Must be picked up in person at 210 S. Main St. FDL
          </p>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Package A</h3>
              <ul className="text-sm text-gray-700 list-disc list-inside mb-2">
                <li>Weekend Lodging for 8 at Ski Brule. (Value $975)</li>
                <li>16 ski lifts (Value $1,200)</li>
              </ul>
              <p className="text-sm text-gray-700">
                Total value = <strong>$2,175</strong>. Check Payable to
                Salvation Army for <strong>$295</strong>. (1 available)
              </p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Package C</h3>
              <ul className="text-sm text-gray-700 list-disc list-inside mb-2">
                <li>Ski Lifts only value $75 each</li>
              </ul>
              <p className="text-sm text-gray-700">
                Check Payable to Salvation Army for <strong>$25</strong>. (Limit
                8)
              </p>
            </div>
          </div>
        </div>
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
