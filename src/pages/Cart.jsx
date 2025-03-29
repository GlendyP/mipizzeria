import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { Toast } from "react-bootstrap";

const Cart = () => {
  const { agregarPizza, eliminarPizza, total, carritoPizzas } = useContext(CartContext);
  const { getUser } = useContext(UserContext);
  const [toastMessage, setToastMessage] = useState(null);

  const user = getUser();
  const cart = carritoPizzas();

  const showToast = (message, variant) => {
    setToastMessage({ message, variant });
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleCartClick = () => {
    handleCart(user, cart, showToast);
  };

  const handleCart = async (user, cart, showToast) => { 
    try {
      const URL = 'http://localhost:5000/api/checkouts';
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error(`Errro al intentar pagar`);
      }
  
      const respuesta = await response.json();
  
      showToast('Pago exitoso', 'success');
  
      console.log(respuesta);
    } catch (error) {
      showToast('Oops... Algo salió mal. Inténtalo nuevamente.', 'danger'); 
      console.error('Error en handleCart:', error);
    }
  };
  

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
          <Button variant="dark" disabled={!user || total === 0} onClick={() => handleCartClick(user)}>Pagar</Button>
        </Col>
      </Row>
      {toastMessage && (
        <Toast
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
          }}
          onClose={() => setToastMessage(null)}
          show={!!toastMessage}
          bg={toastMessage.variant.toLowerCase()}
          autohide
        >
          <Toast.Body className="text-white">{toastMessage.message}</Toast.Body>
        </Toast>
      )}
    </Container>
  );
};

export default Cart;