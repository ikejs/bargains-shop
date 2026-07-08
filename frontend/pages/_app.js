import { useEffect } from "react";
import App from "next/app";
import Head from "next/head";
import Script from "next/script";
import { Outfit } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Layout from "../components/Layout";
import { getCategories } from "../utils/api";
import "../styles/index.css";

config.autoAddCss = false;

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// The credit card fields live in a cross-origin Snipcart iframe, so the
// dark theme has to be passed through Snipcart's customization API. The
// live payment form ignores that API (only the sandbox form honors it),
// so live mode instead gets a CSS invert filter on the iframe, gated by
// the `snipcart-live-payment` class set below.
const themePaymentForm = () => {
  window.Snipcart?.api?.theme?.customization?.registerPaymentFormCustomization({
    input: {
      color: "#e7e9ff",
      fontSize: "15px",
      backgroundColor: "transparent",
      "::placeholder": {
        color: "rgba(231, 233, 255, 0.4)",
      },
    },
    label: {
      color: "#a5adff",
      fontSize: "14px",
    },
  });

  const flagLiveMode = () => {
    const session = window.Snipcart.store.getState().session;
    if (session.loading) {
      return false;
    }
    document.documentElement.classList.toggle(
      "snipcart-live-payment",
      !session.isSandboxMode,
    );
    return true;
  };
  if (!flagLiveMode()) {
    const unsubscribe = window.Snipcart.store.subscribe(() => {
      if (flagLiveMode()) {
        unsubscribe();
      }
    });
  }
};

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    if (window.Snipcart) {
      themePaymentForm();
      return undefined;
    }
    document.addEventListener("snipcart.ready", themePaymentForm);
    return () =>
      document.removeEventListener("snipcart.ready", themePaymentForm);
  }, []);

  return (
    <div className={`${outfit.variable} font-sans`}>
      <Layout categories={pageProps.categories}>
        <Head>
          <meta name="theme-color" content="#05060f" />
          <meta
            name="description"
            content="Gift certificates to Fond du Lac area businesses at a fraction of face value — from Radio Plus."
          />
          <link rel="icon" href="/favicon.ico" sizes="48x48" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.9.0/default/snipcart.css"
          />
        </Head>
        <Script
          src="https://cdn.snipcart.com/themes/v3.9.0/default/snipcart.js"
          strategy="afterInteractive"
        />
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const categories = await getCategories();
  // Pass the data to our page via props
  return { ...appProps, pageProps: { categories, path: ctx.pathname } };
};

export default MyApp;
