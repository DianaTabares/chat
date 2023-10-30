/**
 * El componente de inicio de sesión es un formulario que permite a los usuarios ingresar su nombre de
 * usuario y contraseña para iniciar sesión.
 * @returns Se está devolviendo el componente de inicio de sesión.
 **/

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUsuarios, postAUTH, getUser } from "../Redux/action";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const usuarios = useSelector((state) => state.usuarios);
  const navigate = useNavigate();

  const initialState = {
    nombre: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getUser({ nombre: formData.nombre }));

    if (usuarios) {
      dispatch(
        postAUTH({ nombre: formData.nombre, password: formData.password })
      );
      navigate("/chat", { replace: true });
    } else {
      dispatch(postUsuarios(formData));
      dispatch(postAUTH(formData));
      navigate("/chat", { replace: true });
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre" className="login-label">
            Nombre Usuario
          </label>
          <input
            className="login-input"
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Nombre Usuario"
            value={formData.nombre}
            onChange={handleChange}
          />
          <label htmlFor="password" className="login-label">
            Contraseña
          </label>
          <input
            className="login-input"
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit" className="login-button">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
