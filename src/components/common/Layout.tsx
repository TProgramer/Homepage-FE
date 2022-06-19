import Header from "./header/Header";
import Footer from "./footer/Footer";
import React from "react";
import { Container } from "../../styles/layout/main/header";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
