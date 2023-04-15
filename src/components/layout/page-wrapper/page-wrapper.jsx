import React from "react";
import { Outlet } from "react-router-dom";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";

import { Wrapper, Main } from "./styles";

function PageWrapper() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default PageWrapper;
