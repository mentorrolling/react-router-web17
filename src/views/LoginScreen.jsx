<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> dev
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();
<<<<<<< HEAD

  const [formValue, setFormValue] = useState({
    correo: "",
    password: "",
  });

  const usuario = {
    correo: "benitocapo@gmail.com",
    password: "12345678",
  };

  const handleChange = (e) =>
    setFormValue({ ...formValue, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    //verificar que tengamos un correo y un password
    if (formValue.correo && formValue.password) {
      if (
        formValue.correo === usuario.correo &&
        formValue.password === usuario.password
      ) {
        //redireccionar al Home
        navigate("/");
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } else {
      alert("Correo o password vacio");
    }
  };

  return (
    <div className="container-fluid bg-light">
      <div className="row vh-100 align-items-center">
        <div className="col-12 col-md-6 offset-md-3 bg-white p-4 round">
          <h1 className="text-center my-5">Inicia tu sesión</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                value={formValue.correo}
                onChange={handleChange}
                name="correo"
              />
            </div>
            <div className="mb-3">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control"
                value={formValue.password}
                onChange={handleChange}
                name="password"
=======
  const [formValue, setFormValue] = useState({
    correo: "",
    pass: "",
  });

  useEffect(() => {
    localStorage.removeItem("user");
  }, []);

  const handleChange = ({ target }) => {
    setFormValue({ ...formValue, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValue.correo && formValue.pass) {
      localStorage.setItem("user", JSON.stringify(formValue));
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
>>>>>>> dev
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
