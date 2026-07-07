import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { getProduct } from "../../utils/api";
import { getStrapiMedia } from "../../utils/medias";
import { faArrowLeft, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { savingsPercent } from "../../components/ProductsList";

const ProductPage = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div className="glass-panel my-20 px-8 py-16 text-center text-indigo-100/70">
        Loading bargain...
      </div>
    );
  }

  const percent = savingsPercent(product);
  const imageUrl = getStrapiMedia(
    product.image?.formats?.medium
      ? product.image.formats.medium.url
      : product.image?.formats?.thumbnail?.url,
  );

  return (
    <div className="mt-10">
      <Head>
        <title>{`${product.title} - Radio Plus Bargains`}</title>
      </Head>

      <Link
        href="/"
        className="group inline-flex items-center gap-2.5 text-sm font-semibold text-indigo-100/60 transition-colors hover:text-white"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-all duration-300 group-hover:bg-[#1f2aff]/25 group-hover:shadow-[0_0_20px_rgba(31,42,255,0.4)]">
          <FontAwesomeIcon icon={faArrowLeft} className="h-3.5 w-3.5" />
        </span>
        All deals
      </Link>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="glass-panel relative p-3">
          <div className="flex min-h-[320px] items-center justify-center rounded-xl bg-white p-8 sm:min-h-[420px]">
            <img
              src={imageUrl}
              className="max-h-80 max-w-full object-contain"
              alt={product.title}
            />
          </div>
          {percent > 0 && (
            <span className="absolute right-6 top-6 rounded-full bg-[#1f2aff] px-4 py-1.5 text-sm font-bold text-white shadow-[0_4px_25px_rgba(31,42,255,0.55)]">
              {percent}% OFF
            </span>
          )}
        </div>

        <div className="glass-panel flex flex-col p-7 sm:p-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            {product.title}
          </h1>
          <p className="mt-2 text-indigo-100/60">
            ${product.value} {product.type}
          </p>
          {product.description && (
            <p className="mt-5 whitespace-pre-line leading-relaxed text-indigo-100/80">
              {product.description}
            </p>
          )}

          <div className="mt-auto pt-8">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-4xl font-extrabold text-white">
                ${product.price}
              </span>
              {product.value > product.price && (
                <>
                  <span className="text-lg text-indigo-100/40 line-through">
                    ${product.value}
                  </span>
                  <span className="text-sm font-bold text-emerald-400">
                    You save ${product.value - product.price}
                  </span>
                </>
              )}
            </div>

            {product.status === "published" ? (
              <button
                className="snipcart-add-item mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#1f2aff] py-4 text-base font-bold text-white shadow-[0_8px_30px_rgba(31,42,255,0.45)] transition-all duration-300 hover:bg-[#4552ff] hover:shadow-[0_8px_45px_rgba(31,42,255,0.65)]"
                data-item-id={product.id}
                data-item-price={product.price}
                data-item-url={router.asPath}
                data-item-image={imageUrl}
                data-item-max-quantity="1"
                data-item-shippable="true"
                data-item-name={product.title}
                data-item-custom1-name="Phone Number"
                data-item-custom1-required="true"
              >
                <FontAwesomeIcon icon={faBagShopping} className="h-4 w-4" />
                Add to cart
              </button>
            ) : (
              <div
                className="mt-6 flex items-center gap-3 rounded-2xl bg-white/5 px-5 py-4"
                role="alert"
              >
                <span className="rounded-full bg-[#1f2aff]/30 px-3 py-1 text-xs font-bold uppercase text-indigo-200">
                  Coming soon
                </span>
                <span className="text-sm font-semibold text-indigo-100/70">
                  This bargain is not available yet.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

export async function getServerSideProps({ params }) {
  const product = await getProduct(params.slug);
  if (!product) {
    return { notFound: true };
  }
  return { props: { product } };
}
