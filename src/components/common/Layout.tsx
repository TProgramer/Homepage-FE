import Header from "./header/Header";
import Footer from "./footer/Footer";
import React from "react";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
