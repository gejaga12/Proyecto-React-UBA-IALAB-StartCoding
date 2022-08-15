import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "../Component/CardComponent";
import InfoBarComponent from "../Component/InfoBar";
import { EcommerceContext } from "../context/EcommerceContext";

const ProductsContainer = () => {
  const { products, carrito, setCarrito } = useContext(EcommerceContext);
  const { busqueda } = useParams();

  useEffect(() => {
    console.log(busqueda);
    return () => {
    };
  }, [busqueda]);

  const AgregarAlCarrito = (event, product) => {
    carrito.push(product);
    setCarrito([...carrito]);
    console.log(carrito);
  };

  return (
    <div className="container border border-2 border-dark bg-warning px-3 py-2">
      <InfoBarComponent carrito={carrito} />
      <div className="row px-4 py-3">
        {products.map((element, index) => {
          return (
            <span key={index} className=" col-3 py-2 ">
              <CardComponent
                product={element}
                agregarAlCarrito={AgregarAlCarrito}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsContainer;
