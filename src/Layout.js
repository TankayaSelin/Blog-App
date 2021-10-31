import BlogHeaderRouter from "./components/BlogHeaderRouter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/navbar/Navbar";
import SidebarLayout from "./components/sidebar/SidebarLayout";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Navbar />
      <BlogHeaderRouter />
      <div className="main-container">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">{props.children}</div>
            <div className="col-12 col-md-4">
              <SidebarLayout />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
