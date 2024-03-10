import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <main className="page-body">{props.children}</main>
      <Footer />
    </>
  );
};
export default Layout;
