import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/404";
import Post from "./pages/Posts/Post";
import Posts from "./pages/Posts";

export default function Router() {
  const location = useLocation();

  // const transitions = useTransition(location, {

  //   from: { opacity: 0, transform: "translate3d(100%,0,0)" },
  //   enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
  //   leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  // });
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/posts/:id" component={Post} />

        <Route component={NotFound} />
      </Switch>
    </>
  );
}
