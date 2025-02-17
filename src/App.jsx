import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";
import "./App.css";
import Cart from "./components/Cart";

const App = () => {

  return (
    <>
      <div className="contenedor">
        <div className="top">
          <Navbar />
        </div>
        <div className="middle d-flex flex-column justify-content-center align-items-center">
          {/* <Home /> */}
          <Cart />
          {/* <Container>
            <Row>
              <Col className="pestanas" md={{ span: 6, offset: 3 }}>
                <Tabs
                  defaultActiveKey="login"
                  id="uncontrolled-tab-example"
                >
                  <Tab eventKey="login" title="Login">
                    <Login />
                  </Tab>
                  <Tab eventKey="registro" title="Registro">
                    <Register />
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </Container> */}
        </div>
        <div className="bottom">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;