import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <header className="sticky top-4 z-50 mt-4">
      <div className="glass-panel flex items-center justify-between bg-[#0a0d1c]/70 px-4 py-3 sm:px-6">
        <Link
          href="/"
          aria-label="Radio Plus Bargains home"
          className="shrink-0"
        >
          <img
            src="/logo-dark.svg"
            alt="Radio Plus Bargains"
            width="232"
            height="41"
            className="h-8 w-auto sm:h-10"
          />
        </Link>
        <button
          className="snipcart-checkout group flex items-center gap-2.5 rounded-full bg-white/5 px-4 py-2.5 transition-all duration-300 hover:bg-[#1f2aff]/25 hover:shadow-[0_0_30px_rgba(31,42,255,0.4)] sm:px-5"
          aria-label="Open cart"
        >
          <FontAwesomeIcon
            icon={faBagShopping}
            className="h-4 w-4 text-indigo-200 transition-colors group-hover:text-white"
          />
          <span className="text-sm font-semibold text-indigo-100 transition-colors group-hover:text-white">
            Cart
          </span>
          <span
            suppressHydrationWarning
            className="snipcart-total-price text-sm font-bold text-white"
          ></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
