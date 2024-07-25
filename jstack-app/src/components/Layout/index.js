import React from "react";

import Header from "../Header";
import Footer from "../Footer";

import Router from "../../Routes";

export default function Layout() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}
