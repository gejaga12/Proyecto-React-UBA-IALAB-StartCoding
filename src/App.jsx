import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import ProductsContainer from "./containers/ProductsContainer";
import { EcommerceProvider } from "./context/EcommerceContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from "./containers/homeContainer";
import { addElementToCart } from "./redux/actions/cart";

const App = () => {
  const STATE = useSelector((state) => state.cartReducer);
  console.log(STATE);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(addElementToCart({ id: 1, name: "gerardo", price: 3000 }));
        }}
      >
        {" "}
        Agregar al Carrito
      </button>
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
};

export default App;
