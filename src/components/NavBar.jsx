import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="icono-nav">
          <li>
            <Link className="navbar-brand" to="/">
              BOCA SHOP
            </Link>
          </li>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="links-nav">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <li>
                  <Link className="nav-link" to="/">
                    INICIO
                  </Link>
                </li>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="category/camiseta">
                  CAMISETAS
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="category/short">
                  SHORTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="category/conjunto">
                  CONJUNTOS
                </Link>
              </li>
              <CartWidget />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
