import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Pizza = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/api/pizzas/${id}`;
  const [pizza, setPizza] = useState();
  const { agregarPizza } = useContext(CartContext);

  const obtenerPizza = async () => {
    try {
      const resultadoApiPizza = await fetch(url);
      const dataApiPizza = await resultadoApiPizza.json();
      setPizza(dataApiPizza);
    } catch (error) {
      console.log(error);
    }
  };

  const añadirPizza = ({ id, img, name, price }) => {
    agregarPizza({ id, img, name, price })
  }

  useEffect(() => {
    obtenerPizza();
  }, []);

  return pizza ? (
    <div className="container">
      <div className="col-md-4 mx-auto">
        <div className="card mb-5">
          <img className="card-img-top" src={pizza.img} alt={pizza.name} />
          <div className="card-body p-0">
            <h4 className="card-title text-start pt-3 ps-3 text-capitalize">
              Pizza {pizza.name}
            </h4>
            <hr />

            <h4 className="card-text text-center fw-normal"> Descripción:</h4>
            <p className="card-text text-justify p-3">{pizza.desc}</p>

            <hr />

            <h4 className="card-text fw-normal">🍕 Ingredientes:</h4>
            <ul className="list-unstyled card-text">
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            <div className="card-footer bg-white">
              <h4 className="card-text">
                <span className="fw-bold">Precio:</span> $
                {pizza.price.toLocaleString("es-CL")}
              </h4>
              <div className="d-flex justify-content-center gap-3 px-sm-5 pb-3">
                <button className="btn btn-dark" onClick={() => añadirPizza(pizza)}>Añadir 🛒 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Pizza;