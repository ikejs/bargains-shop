import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#05060f] text-slate-100">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div className="aurora aurora-a" />
        <div className="aurora aurora-b" />
        <div className="aurora aurora-c" />
      </div>

      <div className="relative flex justify-center">
        <div className="flex min-h-screen w-full max-w-6xl flex-col px-4 sm:px-6">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </div>

      <div
        hidden
        id="snipcart"
        data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
        data-config-modal-style="side"
      ></div>
    </div>
  );
};

export default Layout;
