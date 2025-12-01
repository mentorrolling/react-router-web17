import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const { logIn, logOut } = useContext(UserContext);
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    correo: "",
    pass: "",
  });

  //Cuando se monta esta vista se desloguea el usuario
  useEffect(() => {
    logOut();
  }, []);

  const handleChange = ({ target }) => {
    setFormValue({ ...formValue, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValue.correo && formValue.pass) {
      logIn(formValue.correo);
      navigate("/");
    } else {
      alert("Usuario o contraseña vacios");
    }
  };
  return (
    <div className="container-fluid bg-light">
      <div className="row vh-100 align-items-center">
        <div className="col-12 col-md-6 offset-md-3 bg-white p-3 rounded shadow">
          <section className="text-center my-5">
            <h1>Inicio de sesión</h1>
          </section>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="fw-bold">Correo</label>
              <input
                type="email"
                className="form-control"
                name="correo"
                value={formValue.correo}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="fw-bold">Contraseña</label>
              <input
                type="password"
                className="form-control"
                name="pass"
                value={formValue.pass}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 d-grid">
              <button className="btn btn-success">Iniciar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
