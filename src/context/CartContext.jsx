import { createContext, useState } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

  const calcularTotal = () => {
    let total = 0;
    for (let pizza of carrito) {
      total = (pizza.price * pizza.count) + total;
    }
    return total;
  };

  const agregarPizza = (pizzaNueva) => {
    const pizzaExistente = carrito.find((pizza) => pizza.id === pizzaNueva.id);

    if (pizzaExistente) {
      const nuevoCarrito = carrito.map((pizza) =>
        pizza.id === pizzaNueva.id
          ? { ...pizza, count: pizza.count + 1 }
          : pizza
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...pizzaNueva, count: 1 }]);
    }
  };

  const eliminarPizza = (pizzaAQuitar) => {
    const nuevoCarrito = carrito.map((pizza) =>
      pizza.id === pizzaAQuitar.id
        ? { ...pizza, count: Math.max(0, pizza.count - 1) }
        : pizza
    );
    setCarrito(nuevoCarrito);
  };

  const carritoPizzas = () => {
    return carrito;
  };

  const contexto = {
    agregarPizza,
    eliminarPizza,
    carritoPizzas,
    calcularTotal,
    total: calcularTotal(), 
  };

  return (
    <CartContext.Provider value={contexto}>{children}</CartContext.Provider>
  );
};