import { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Profile = () => {
    const { profile, logout } = useContext(UserContext);
    const [userProfile, setUserProfile] = useState(null);
    
    useEffect(() => {
      const fetchUserProfile = async () => {
        const info = await profile();
        setUserProfile(info);
      }
  
      fetchUserProfile()
    }, []);
  
    const cerrarSesion = () => {
      logout()
    }


  return userProfile ? (
    <Container>
      <Row>
        <Col className="perfil">
            <h1>Perfil de Usuario</h1>
            <p>{userProfile.email}</p>
            <Link to="/" className="btn btn-primary"  onClick={() => cerrarSesion()}>
              Cerrar Sesión
            </Link>
        </Col>
      </Row>
    </Container>
  ): null;
};

export default Profile;