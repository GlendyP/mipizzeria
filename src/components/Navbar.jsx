const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Pizzería Mamma Mia!
        </a>
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
              <a className="nav-link" href="#">
                🍕 Home
              </a>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    🔓 Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    🔒 Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    🔐 Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    🔐 Register
                  </a>
                </li>
              </>
            )}
                           <form className="d-flex ms-auto">
                  <button className="btn btn-outline-primary" type="button">
                    🛒 Total: ${total.toLocaleString('es-CL')}
                  </button>
                </form>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
