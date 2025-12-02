import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const NavBarApp = () => {
  const { user } = useContext(UserContext);
  const rutas = [
    { id: 1, path: "/", title: "Inicio" },
    { id: 2, path: "about", title: "Sobre nosotros" },
    { id: 3, path: "contact", title: "Contacto" },
  ];
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {rutas.map(({ path, id, title }) => (
              <li className="nav-item" key={id}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to={path}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="login" className="nav-link">
                Cerrar sesión {user.name}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarApp;
