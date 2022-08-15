const InfoBarComponent = ({carrito}) => {
    return (
        <div className="text-warning fw-bold bg-dark border border-2 border-dark py-4">
            Elementos del Carrito: {carrito.length}
        </div>
    ) 
}

export default InfoBarComponent; 