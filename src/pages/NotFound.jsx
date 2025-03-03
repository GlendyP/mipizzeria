import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>404</h1>
            <p>Página no encontrada</p>
            <Link to="/" className="btn btn-primary">
              Volver al inicio
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NotFound;