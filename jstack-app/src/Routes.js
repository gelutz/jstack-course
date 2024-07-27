import React from "react";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";

export default function Router() {
  const location = useLocation();

  // const transitions = useTransition(location, {

  //   from: { opacity: 0, transform: "translate3d(100%,0,0)" },
  //   enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
  //   leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  // });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={Home} />
      </Routes>
    </BrowserRouter>
  );
}
