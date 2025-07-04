import Head from "next/head";
import { useRouter } from "next/router";
import { getProduct } from "../../utils/api";
import { getStrapiMedia } from "../../utils/medias";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductPage = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading category...</div>;
  }

  // if (product && product.description && product?.description?.includes("---")) {
  //   product.description = product?.description
  //     ?.split("----")
  //     ?.map((bullet) => <ul style={{ marginBottom: "1em" }}>{bullet}</ul>);
  // }

  return (
    <div className="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-8">
      <Head>
        <title>{product.title}</title>
      </Head>
      <div className="rounded-t-lg pt-2 pb-2">
        <button
          onClick={() => router.push("/")}
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "#7978B3",
            color: "white",
            borderRadius: "50%",
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <img
          src={getStrapiMedia(
            product.image?.formats?.medium
              ? product.image.formats?.medium?.url
              : product.image.formats?.thumbnail?.url,
          )}
          className="m-auto"
          style={{ width: "70%" }}
          alt={product.title}
        />
      </div>
      <div className="w-full p-5 flex flex-col justify-between">
        <div>
          <h3 className="mt-1 font-semibold text-lg leading-tight truncate text-gray-700">
            {product.title}
          </h3>
          <h4 className="mt-1 font-semibold text-md leading-tight truncate text-gray-700">
            ${product.value} {product.type}
          </h4>
          <div className="mt-1 mb-2 text-gray-600">
            <ol>{product.description}</ol>
          </div>
          <div className="mt-1 mb-2 font-semibold text-green-600">
            Price: ${product.price}
          </div>
          <hr />
        </div>

        {product.status === "published" ? (
          <button
            className="snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow"
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-url={router.asPath}
            // data-item-description={product.description}
            data-item-image={getStrapiMedia(
              product.image?.formats?.medium
                ? product.image.formats.medium.url
                : product.image.formats?.thumbnail?.url,
            )}
            data-item-max-quantity="1"
            data-item-shippable="true"
            data-item-name={product.title}
            data-item-custom1-name="Phone Number"
            data-item-custom1-required="true"
            v-bind="customFields"
          >
            Add to cart
          </button>
        ) : (
          <div className="text-center mr-10 mb-1" v-else>
            <div
              className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
              role="alert"
            >
              <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                Coming soon...
              </span>
              <span className="font-semibold mr-2 text-left flex-auto">
                This article is not available yet.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;

export async function getServerSideProps({ params }) {
  const product = await getProduct(params.slug);
  return { props: { product } };
}

// export async function getStaticPaths() {
//   const products = await getProducts();
//   return {
//     paths: products.map((_product) => {
//       return {
//         params: { slug: _product.slug },
//       };
//     }),
//     fallback: true,
//   };
// }
