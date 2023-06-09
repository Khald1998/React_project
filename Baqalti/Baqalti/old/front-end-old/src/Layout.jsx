import { Outlet } from "react-router-dom";
import Header from "./parts/Header";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="p-4 flex flex-col ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
