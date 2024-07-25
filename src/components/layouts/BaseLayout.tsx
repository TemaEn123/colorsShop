import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <main className="main container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default BaseLayout;
