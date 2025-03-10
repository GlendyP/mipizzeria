import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { agregarPizza, eliminarPizza, total, carritoPizzas } = useContext(CartContext);
  const cart = carritoPizzas();

  return (
    
    <Container className="mb-5">
      <Row>
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <h1 className="text-start">Detalles del pedido:</h1>
        </Col>
      </Row>
      {cart.map(pizza => pizza.count > 0 ? (
        <Row gap={3} key={pizza.id} className="mb-3">
          <Col xs={12} md={{ span: 6, offset: 3 }}>
            <Row className="align-items-center">
              <Col md={2} className="text-start">
                {
                  <Image
                    className="img-pizza-cart"
                    src={pizza.img}
                    alt={pizza.name}
                    fluid
                  />
                }
              </Col>
              <Col className="text-start text-capitalize fw-bold">{pizza.name}</Col>
              <Col>
                <span className="fw-bold">Precio:</span> ${pizza.price.toLocaleString('es-CL')}
              </Col>
              <Col>
                <Stack direction="horizontal" gap={3}>
                  <div className="p-2">
                    <Button
                      variant="outline-danger"
                      onClick={() => eliminarPizza(pizza)}
                    >
                      -
                    </Button>
                  </div>
                  <div className="p-2">
                    <span className="fw-bold">{pizza.count}</span>
                  </div>
                  <div className="p-2">
                    <Button variant="outline-primary"
                      onClick={() => agregarPizza(pizza)}
                    >
                      +
                    </Button>
                  </div>
                </Stack>
              </Col>
            </Row>
          </Col>
        </Row>
      ): (''))}
      <Row>
        <Col xs={12} md={{ span: 6, offset: 3 }} className="mt-4">
          <h4 className="text-start">Total: ${total.toLocaleString('es-CL')}</h4>
        </Col>
        <Col xs={12} md={{ span: 6, offset: 3 }} className="text-start">
          <Button variant="dark">Pagar</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;