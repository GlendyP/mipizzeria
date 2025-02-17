const CardPizza = ({ pizza }) => {
  return (
    <div className="card mb-5">
      <img className="card-img-top" src={pizza.img} alt={pizza.name} />
      <div className="card-body p-0">
        <h4 className="card-title text-start pt-3 ps-3">Pizza {pizza.name}</h4>
        <hr />
        <h4 className="card-text fw-normal">🍕 Ingredientes:</h4>
        <ul className="list-unstyled card-text">
          {pizza.ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>

        <div className="card-footer bg-white">
          <h4 className="card-text">
            <span className="fw-bold">Precio:</span> ${pizza.price.toLocaleString('es-CL')}
          </h4>
          <div className="d-flex justify-content-between gap-3 px-sm-5 pb-3">
            <button className="btn btn-outline-dark">Ver Más 👀</button>
            <button className="btn btn-dark">Añadir 🛒 </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;