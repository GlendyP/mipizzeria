import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const App = () => {
  const { getToken } = useContext(UserContext);
  const token = getToken();

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div className="contenedor">
            <div className="top">
              <Navbar />
            </div>
            <div className="middle d-flex flex-column justify-content-center align-items-center">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pizza/:id" element={<Pizza />} />
                <Route path="/cart" element={<Cart />} />
                <Route
                  path="/register"
                  element={!token ? <Register /> : <Navigate to="/" />}
                />
                <Route
                  path="/login"
                  element={!token ? <Login /> : <Navigate to="/" />}
                />
                <Route
                  path="/profile"
                  element={token ? <Profile /> : <Navigate to="/login" />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <div className="bottom">
              <Footer />
            </div>
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
