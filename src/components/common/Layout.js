import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-md xl:max-w-screen-xl mx-auto">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
