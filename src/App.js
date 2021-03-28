import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreateProduct from "./pages/CreateProduct";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create" exact component={CreateProduct} />
        <Route />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
