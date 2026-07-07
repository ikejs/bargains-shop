import Link from "next/link";
import { getStrapiMedia } from "../utils/medias";

export const savingsPercent = (product) =>
  product.value > 0 && product.price < product.value
    ? Math.round((1 - product.price / product.value) * 100)
    : 0;

const ProductsList = ({ products }) => {
  if (!products?.length) {
    return (
      <div className="glass-panel my-10 px-8 py-16 text-center">
        <p className="text-lg font-semibold text-white">
          No bargains right now
        </p>
        <p className="mt-2 text-sm text-indigo-100/60">
          Check back soon — new deals drop all the time.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const percent = savingsPercent(product);
        return (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="glass-panel group block overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_45px_-5px_rgba(31,42,255,0.45)]"
          >
            <div className="relative m-3 mb-0 flex h-48 items-center justify-center overflow-hidden rounded-xl bg-white p-4">
              <img
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                src={getStrapiMedia(
                  product.image?.formats?.medium
                    ? product.image.formats.medium.url
                    : product.image?.formats?.thumbnail?.url,
                )}
                alt={product.title}
                loading="lazy"
              />
              {percent > 0 && (
                <span className="absolute right-3 top-3 rounded-full bg-[#1f2aff] px-3 py-1 text-xs font-bold text-white shadow-[0_4px_20px_rgba(31,42,255,0.5)]">
                  {percent}% OFF
                </span>
              )}
            </div>
            <div className="p-5">
              <p className="truncate text-lg font-bold text-white">
                {product.title}
              </p>
              <p className="mt-0.5 text-sm text-indigo-100/60">
                ${product.value} {product.type}
              </p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-white">
                  ${product.price}
                </span>
                {product.value > product.price && (
                  <span className="text-sm text-indigo-100/40 line-through">
                    ${product.value}
                  </span>
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;
