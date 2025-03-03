import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [mensaje, setMensaje] = useState("");
  const [validated, setValidated] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      setMensaje("Todos los campos son obligatorios.");
      setValidated(true);
      return;
    }

    if (formData.password.length < 6) {
      setMensaje("El password debe tener al menos 6 caracteres.");
      setValidated(true);
      return;
    }

    setMensaje("Autenticado exitosamente.");
    setValidated(false);

  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  return (

    <Container fluid>
      <Row>
        <Col className="login">
          <Form onSubmit={handleSubmit} noValidate validated={validated}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label className="text-start">Email</Form.Label>
              <Col>
                <Form.Control
                  placeholder="email@example.com"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label className="text-start">Contraseña:</Form.Label>
              <Col>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Form.Group>

            {mensaje && <p className={"mt-3 " + (!validated? "text-success" : "text-danger")}>{mensaje}</p>}

            <Button variant="outline-light" type="submit">Login</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
