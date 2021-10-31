import { Route } from "react-router";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";

const App = (props) => {
  return (
    <>
      <Route path={"/"} exact component={Home} {...props} />
      <Route path={"/posts/:id"} component={PostDetails} {...props} />
    </>
  );
};

export default App;

