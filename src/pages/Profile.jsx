import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col className="perfil">
            <h1>Perfil de Usuario</h1>
            <p>correo@gmail.com</p>
            <Link to="/" className="btn btn-primary">
              Cerrar Sesión
            </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;