import React from "react";
import Intro from "/src/components/blocks/intro/intro";
import Benefits from "/src/components/blocks/benefits/benefits";

function MainPage({ advantages, disadvantages }) {
  return (
    <>
      <Intro />
      <Benefits advantages={advantages} disadvantages={disadvantages} />
    </>
  );
}

export default MainPage;
