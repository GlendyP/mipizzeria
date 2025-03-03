import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;
  const token = true;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Pizzería Mamma Mia!
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto w-100">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                🍕 Home
              </Link>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    🔓 Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    🔒 Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    🔐 Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    🔐 Register
                  </Link>
                </li>
              </>
            )}
            <form className="d-flex ms-auto">
              <Link to="/cart">
                <button className="btn btn-outline-primary" type="button">
                  🛒 Total: ${total.toLocaleString("es-CL")}
                </button>
              </Link>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
