import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useForm } from "react-hook-form";

const LoginScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { logIn, logOut } = useContext(UserContext);

  const navigate = useNavigate();
  // const [formValue, setFormValue] = useState({
  //   correo: "",
  //   pass: "",
  // });

  useEffect(() => {
    localStorage.removeItem("user");
    logOut();
  }, []);

  // const handleChange = ({ target }) => {
  //   setFormValue({ ...formValue, [target.name]: target.value });
  // };

  const guardarUsuario = (data) => {
    console.log(data);
    // e.preventDefault();
    if (data.correo && data.pass) {
      localStorage.setItem("user", JSON.stringify(data));
      logIn(data.correo, "Usuario");

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
          <form onSubmit={handleSubmit(guardarUsuario)} noValidate>
            <div className="mb-3">
              <label className="fw-bold">Correo</label>
              <input
                type="email"
                className="form-control"
                {...register("correo", {
                  required: "El correo es obligatorio",
                  pattern: {
                    value: /^\w+@\w+\.\w{2,4}$/i,
                    message: "No es un correo válido",
                  },
                })}
                // name="correo"
                // value={formValue.correo}
                // onChange={handleChange}
              />
              {errors.correo && (
                <p className="text-danger">{errors.correo.message}</p>
              )}
            </div>
            <div className="mb-3">
              <label className="fw-bold">Contraseña</label>
              <input
                type="password"
                className="form-control"
                {...register("pass", {
                  required: "La contraseña es obligatoria",
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
                    message:
                      "La contraseña debe tener al menos una mayúscula, un número, un símbolo y mínimo 8 caracteres.",
                  },
                })}
                // name="pass"
                // value={formValue.pass}
                // onChange={handleChange}
              />
              {errors.pass && (
                <p className="text-danger">{errors.pass.message}</p>
              )}
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
