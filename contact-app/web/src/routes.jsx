import { BrowserRouter, Route } from "react-router-dom";

import EditContact from "./pages/Contact/EditContact";
import Home from "./pages/Home";
import NewContact from "./pages/Contact/NewContact";

const Routes = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/new" component={NewContact} />
      <Route path="/edit/:id" component={EditContact} />
    </>
  );
};

export default Routes;
