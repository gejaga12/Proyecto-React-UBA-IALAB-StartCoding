import { createContext, useEffect, useState } from "react";

export const EcommerceContext = createContext();

export const EcommerceProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [carrito, setCarrito] = useState([]);

  async function funcionAPI(searchQuery) {
    const data = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}`
    );
    const response = await data.json();
    setProducts(response.results);
  }

  useEffect(() => {
    funcionAPI();
  }, []);

  return <EcommerceContext.Provider value={{ products, carrito, setCarrito }}>
    {children}
  </EcommerceContext.Provider>;

};
