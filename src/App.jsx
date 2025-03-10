import { BrowserRouter, Route, Routes } from "react-router-dom";
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

const App = () => {
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
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/pizza/p001" element={<Pizza />} />
                <Route path="/profile" element={<Profile />} />
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
