/* El código que proporcionó es un componente de React llamado "Chat". Importa dependencias necesarias
como React, useState, getTasaCambio, useDispatch y useSelector. También importa un archivo CSS
llamado "Chat.css". */
import React, { useState } from "react";
import { getTasaCambio } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import "./Chat.css";

function Chat() {
  const dispatch = useDispatch();
  const enviar = useSelector((state) => state.tasaDeCambio);
  console.log(enviar);
  const [moneda, setmoneda] = useState(0);
  const [origenConversion, setOrigenConversion] = useState("USD");
  const [destinoConversion, setDestinoConversion] = useState("COP");

  const handleTasaDeCambio = () => {
    dispatch(getTasaCambio(moneda, origenConversion, destinoConversion));
  };

  return (
    <div className="chat-container">
      <div className="result-container">
        {enviar !== null ? (
          enviar.map((e, i) => <div key={i}>{e.text}</div>)
        ) : (
          <p>Esperando la tasa de cambio...</p>
        )}
      </div>
      <input
        type="number"
        className="chat-input"
        value={moneda}
        onChange={(e) => setmoneda(e.target.value)}
        placeholder="Cantidad"
      />
      <select
        className="chat-select"
        value={origenConversion}
        onChange={(e) => setOrigenConversion(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="COP">COP</option>
      </select>
      a
      <select
        className="chat-select"
        value={destinoConversion}
        onChange={(e) => setDestinoConversion(e.target.value)}
      >
        <option value="COP">COP</option>
        <option value="USD">USD</option>
      </select>
      <button className="chat-button" onClick={handleTasaDeCambio}>
        Enviar
      </button>
    </div>
  );
}

export default Chat;
