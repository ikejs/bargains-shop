import Head from "next/head";
import { useRouter } from "next/router";
import ProductsList from "../../components/ProductsList";
import { getCategory } from "../../utils/api";

const CategoryPage = ({ category }) => {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div className="glass-panel my-20 px-8 py-16 text-center text-indigo-100/70">
        Loading category...
      </div>
    );
  }

  return (
    <div className="mt-10">
      <Head>
        <title>{`${category.name} - Radio Plus Bargains`}</title>
      </Head>
      <h1 className="mb-6 text-2xl font-extrabold text-white sm:text-3xl">
        {category.name}
      </h1>
      <ProductsList products={category.products} />
    </div>
  );
};

export default CategoryPage;

export async function getServerSideProps({ params }) {
  const category = await getCategory(params.slug);
  if (!category) {
    return { notFound: true };
  }
  return { props: { category } };
}
