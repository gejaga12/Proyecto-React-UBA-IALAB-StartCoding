import { useContext } from "react";
import { Link } from "react-router-dom";
import { EcommerceContext } from "../context/EcommerceContext";

const HomeContainer = () => {
  const { carrito } = useContext(EcommerceContext);

  return (
    <div className="container py-4">
      <div className="card fst-italic border border-3 border-dark bg-warning">
        <h1>Hola, tenes {carrito.length} producto en tu carrito </h1>
       <div>
        <Link to={'/productos/'}> Ir a la home </Link>
        </div> 
      </div>
    </div>
  );
};
export default HomeContainer;
