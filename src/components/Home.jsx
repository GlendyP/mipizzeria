import { pizzas } from "../assets/js/pizza";
import CardPizza from "./CardPizza";
import Header from "./Header";

const Home = () => {
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