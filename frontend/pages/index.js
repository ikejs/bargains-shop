import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCircleInfo,
  faStore,
  faTowerBroadcast,
} from "@fortawesome/free-solid-svg-icons";
import ProductsList from "../components/ProductsList";
import { getProducts } from "../utils/api";

const notices = [
  {
    icon: faStore,
    title: "Buy in person",
    body: (
      <>
        Bargains are available to purchase with cash/check at{" "}
        <strong className="text-white">210 S Main Street</strong>, Monday –
        Friday, 8AM to 4PM. Transacted through the Fond du Lac office only.
      </>
    ),
  },
  {
    icon: faCircleInfo,
    title: "The fine print",
    body: (
      <>
        Limit <strong className="text-white">1 certificate</strong> per
        business, per household every 30 days. You may only use 1 certificate
        per business visit and cannot combine 2 certificates on the same bill.
      </>
    ),
  },
  {
    icon: faTowerBroadcast,
    title: "Waupun deals",
    body: (
      <>
        Looking for Waupun radio program deals?{" "}
        <a
          className="font-semibold text-[#8f97ff] underline decoration-[#1f2aff]/50 underline-offset-4 transition-colors hover:text-white"
          target="_blank"
          href="https://www.radioplusinfo.com/save-big-shop-our-bargains/"
          rel="noreferrer"
        >
          Shop them here
        </a>
        .
      </>
    ),
  },
];

const HomePage = ({ products }) => {
  products = products
    .filter((product) => product.status === "published")
    .sort((a, b) => (a.title > b.title ? 1 : -1));

  return (
    <div>
      <Head>
        <title>Online Bargains - Radio Plus</title>
      </Head>

      <section className="relative mb-16 mt-14 sm:mt-20">
        <div aria-hidden className="absolute -top-10 right-4 hidden lg:block">
          <img
            src="/favicon.svg"
            alt=""
            className="tag-float h-52 w-52 opacity-90 drop-shadow-[0_0_60px_rgba(31,42,255,0.55)]"
          />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-300">
          Radio Plus · Fond du Lac
        </p>
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Local deals,
          <br />
          <span className="text-gradient">half the price.</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-indigo-100/70">
          Gift certificates to Fond du Lac area businesses at a fraction of face
          value — straight from your favorite local radio stations.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#deals"
            className="rounded-full bg-[#1f2aff] px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_30px_rgba(31,42,255,0.45)] transition-all duration-300 hover:bg-[#4552ff] hover:shadow-[0_8px_40px_rgba(31,42,255,0.65)]"
          >
            Shop the deals
          </a>
          <a
            href="https://www.radioplusinfo.com/save-big-shop-our-bargains/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-white/5 px-7 py-3.5 text-sm font-bold text-indigo-100 backdrop-blur transition-all duration-300 hover:bg-white/10 hover:text-white"
          >
            Waupun deals
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="h-3 w-3 opacity-60"
            />
          </a>
        </div>
      </section>

      <section className="mb-16 grid gap-4 sm:grid-cols-3">
        {notices.map((notice) => (
          <div key={notice.title} className="glass-panel px-6 py-5">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1f2aff]/20 text-[#8f97ff]">
                <FontAwesomeIcon icon={notice.icon} className="h-4 w-4" />
              </span>
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                {notice.title}
              </h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-indigo-100/70">
              {notice.body}
            </p>
          </div>
        ))}
      </section>

      <section id="deals" className="scroll-mt-24">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            This week&apos;s bargains
          </h2>
          <p className="text-sm text-indigo-100/50">
            {products.length} deal{products.length === 1 ? "" : "s"}
          </p>
        </div>
        <ProductsList products={products} />
      </section>
    </div>
  );
};

export async function getServerSideProps() {
  const products = await getProducts();
  return { props: { products } };
}

export default HomePage;
