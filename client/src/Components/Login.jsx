/**
 * El componente de inicio de sesión es un formulario que permite a los usuarios ingresar su nombre de
 * usuario y contraseña para iniciar sesión.
 * @returns Se está devolviendo el componente de inicio de sesión.
 **/

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUsuarios, postAUTH } from "../Redux/action";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const usuarios = useSelector((state) => state.mostrar);
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
    const existeUsuario = nombreUsuario(formData.nombre, formData.password);

    if (existeUsuario) {
      dispatch(postAUTH(existeUsuario));
      navigate("/chat", { replace: true });
    } else {
      dispatch(postUsuarios(formData));
    }
  };

  const nombreUsuario = (nombre, password) => {
    return usuarios.find(
      (usuario) => usuario.nombre === nombre && usuario.password === password
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre Usuario</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Nombre Usuario"
          value={formData.nombre}
          onChange={handleChange}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}
export default Login;
