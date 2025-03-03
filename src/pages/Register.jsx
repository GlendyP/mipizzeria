import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Register = () => {
  const [validated, setValidated] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setMensaje("Todos los campos son obligatorios.");
      setValidated(true);
      return;
    }

    if (formData.password.length < 6) {
      setMensaje("El password debe tener al menos 6 caracteres.");
      setValidated(true);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMensaje("El password y la confirmación del password deben ser iguales.");
      setValidated(true);
      return;
    }

    setMensaje("El registro fue exitoso.");
    setValidated(false);
  };

  return (
    <Container fluid>
      <Row>
        <Col className="registro">
          <Form onSubmit={handleSubmit} noValidate validated={validated}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="email"
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
              controlId="passsword"
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

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="confirmarpassword"
            >
              <Form.Label className="text-start">Confirmar Contraseña:</Form.Label>
              <Col>
              <Form.Control
                type="password"
                placeholder="Confirmar Contraseña"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              </Col>
            </Form.Group>

            {mensaje && (
              <p
                className={
                  "mt-3 " + (!validated ? "text-success" : "text-danger")
                }
              >
                {mensaje}
              </p>
            )}

            <Button variant="outline-light" type="submit">
              Registrarse
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
