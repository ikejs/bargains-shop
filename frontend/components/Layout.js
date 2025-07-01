// import CategoryButtons from "./CategoryButtons";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, categories }) => {
  return (
    <div className="flex justify-center bg-gray-200">
      <div className="max-w-screen-lg flex flex-col min-h-screen w-full">
        <Navbar />
        {/* <CategoryButtons categories={categories} /> */}
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
      <div
        hidden
        id="snipcart"
        data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
        data-config-modal-style="side"
      >
        <address-fields section="top">
          <div>
            <snipcart-label for="phone">Phone number</snipcart-label>
            <snipcart-input name="phone"></snipcart-input>
          </div>
        </address-fields>
      </div>
    </div>
  );
};

export default Layout;
