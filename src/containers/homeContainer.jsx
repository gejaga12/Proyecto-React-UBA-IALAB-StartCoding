import { useContext } from "react";
import { EcommerceContext } from "../context/EcommerceContext";

const HomeContainer = () => {
  const { carrito } = useContext(EcommerceContext);

  return (
    <div className="container py-4">
      <div className="card fst-italic border border-3 border-dark bg-warning">
        <h1>Hola, tenes {carrito.length} producto en tu carrito </h1>
      </div>
    </div>
  );
};
export default HomeContainer;
