import React from "react";

import Header from "../Header";
import Footer from "../Footer";

import Router from "../../Routes";
import { BrowserRouter, Link } from "react-router-dom";
import { Nav } from "./styles";

export default function Layout() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
        </Nav>
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
}
