import { Link } from "react-router-dom";

const InfoBarComponent = ({ carrito, handleKeyUp, children }) => {
  return (
    <div className="text-warning fw-bold bg-dark border border-2 border-dark py-4">
      <div>
        <input
          type="text"
          onInput={handleKeyUp}
          placeholder="Buscar por nomber"
        />
      </div>

      <br />

      <Link to={"/"}> Ir a la home </Link>

      <br />

      <div>
        ELEMENTOS DEL CARRITO: {carrito.length} {children}
      </div>
    </div>
  );
};

export default InfoBarComponent;
