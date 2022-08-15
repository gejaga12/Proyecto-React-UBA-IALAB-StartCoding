import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "../Component/CardComponent";
import InfoBarComponent from "../Component/InfoBar";
import { EcommerceContext } from "../context/EcommerceContext";

const ProductsContainer = () => {
  const { products, carrito, setCarrito, funcionAPI, setProducts } = useContext(EcommerceContext);
  const { busqueda } = useParams();
  // const [ setTerminoDeBusqueda ] = useState([]);

  useEffect(() => {
    funcionAPI(busqueda);
    return () => {};
  }, [busqueda]);

  const AgregarAlCarrito = (event, product) => {
    carrito.push(product);
    setCarrito([...carrito]);
    console.log(carrito);
  };

  const handleKeyUp = (e) => {
    console.log(e.target.value);
     const productsFilter = products.filter((element) => {
      if (element.title.toUpperCase().match(e.target.value.toUpperCase())) {
        return true;
      }
      return false;
    })
    setProducts(productsFilter);
    console.log(productsFilter);
  };

  return (
    <div className="container border border-2 border-dark bg-warning px-3 py-2">
      <InfoBarComponent carrito={carrito} handleKeyUp={handleKeyUp} />
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
