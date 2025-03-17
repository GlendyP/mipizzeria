import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Profile = () => {
    const { logout } = useContext(UserContext);
  
    const cerrarSesion = () => {
      logout()
    }

  return (
    <Container>
      <Row>
        <Col className="perfil">
            <h1>Perfil de Usuario</h1>
            <p>correo@gmail.com</p>
            <Link to="/" className="btn btn-primary"  onClick={() => cerrarSesion()}>
              Cerrar Sesión
            </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;