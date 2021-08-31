import Link from "next/link";
import { getStrapiMedia } from "../utils/medias";
import styles from "./ProductList.module.css";

const ProductsList = ({ products }) => {
  return (
    <div className="m-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8">
      {products.map((_product) => (
        <div
          key={_product.id}
          className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md"
        >
          <Link href={`/products/${_product.slug}`}>
            <a>
              <div className={`rounded-t-lg bg-white pt-2 pb-2 ${styles.image}`}>
                <img
                  className="crop mx-auto"
                  src={getStrapiMedia(_product.image.formats.thumbnail.url)}
                  alt={_product.title}
                />
              </div>
              <div className="pl-4 pr-4 pb-4 pt-4 rounded-lg">
                <div className="mt-1 text-base leading-tight truncate text-gray-700">
                  <p className="font-semibold text-xl">
                    <strong>{_product.title}</strong>
                  </p>
                  ${_product.value} {_product.type} for{" "}
                  <strong className="text-green-600">${_product.price}</strong>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
