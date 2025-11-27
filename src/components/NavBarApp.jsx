import { Link, NavLink } from "react-router-dom";

const NavBarApp = () => {
  const rutas = [
    { id: 1, path: "/", title: "Inicio" },
    { id: 2, path: "about", title: "Sobre nosotros" },
    { id: 3, path: "contact", title: "Contacto" },
  ];
<<<<<<< HEAD

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          BiblioTech
=======
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
>>>>>>> dev
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
<<<<<<< HEAD
            {rutas.map((ruta) => (
              <li className="nav-item" key={ruta.id}>
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to={ruta.path}
                >
                  {ruta.title}
=======
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
>>>>>>> dev
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="login" className="nav-link">
                Cerrar sesión
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarApp;
