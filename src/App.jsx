import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsContainer from "./containers/ProductsContainer";
import { EcommerceProvider } from "./context/EcommerceContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from "./containers/homeContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <EcommerceProvider>
          <Switch>

            <Route exact path="/productos/:busqueda">
              <ProductsContainer />
            </Route>

            <Route path="/productos">
              <ProductsContainer />
            </Route>

            <Route>
              <HomeContainer exact path="/" />
            </Route>
            
          </Switch>
        </EcommerceProvider>
      </Router>
    </div>
  );
}

export default App;
