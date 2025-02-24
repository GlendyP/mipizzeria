import { useEffect, useState } from "react";
import CardPizza from "./CardPizza";
import Header from "./Header";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const url = 'http://localhost:5000/api/pizzas';

  const getPizzas = async () => {
    try {
      const resultado = await fetch(url)
      const data = await resultado.json()
      setPizzas(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getPizzas()
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-4" key={pizza.id} >
            <CardPizza
              pizza={pizza}
            />
          </div>
           ))}
        </div>
      </div>
    </>
  );
};

export default Home;