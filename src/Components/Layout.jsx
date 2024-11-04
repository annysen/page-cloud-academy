import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = () => {
  return (
    <div className="max-w-full ">
      <div className="py-5">
        <Nav></Nav>
      </div>
      <div className="min-h-[calc(100vh-350px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
