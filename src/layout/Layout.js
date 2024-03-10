import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="page-body h-screen text-gray-400">{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
