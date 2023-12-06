import React, { useState, useEffect } from "react";
import { getTasaCambio } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import "./Chat.css";

function Chat() {
  const dispatch = useDispatch();
  const mensajes = useSelector((state) => state.mensajes);
  const [mensaje, setMensaje] = useState("");
  const [moneda, setMoneda] = useState(0);
  const [origenConversion, setOrigenConversion] = useState("USD");
  const [destinoConversion, setDestinoConversion] = useState("COP");

  useEffect(() => {
    if (mensajes.length === 0) {
      setTimeout(() => {
        const respuestaBot = "¡Hola! ¿En qué puedo ayudarte?";
        dispatch({ type: "RESPUESTA_BOT", payload: respuestaBot });
      }, 1000);
    }
  }, [mensajes, dispatch]);

  const handleEnviarMensaje = () => {
    if (moneda === 0) {
      // Si la cantidad de moneda es cero, solo enviar mensaje
      dispatch({ type: "ENVIAR_MENSAJE", payload: mensaje });
      const respuestaBot = `No entiendo "${mensaje}", pero estoy aquí para ayudar.`;
      dispatch({ type: "RESPUESTA_BOT", payload: respuestaBot });
    } else {
      // Si hay una cantidad de moneda, realizar conversión y enviar mensaje
      dispatch(getTasaCambio(moneda, origenConversion, destinoConversion));
      const respuestaBot = `Convertir ${moneda} ${origenConversion} a ${destinoConversion}.`;
      dispatch({ type: "RESPUESTA_BOT", payload: respuestaBot });
    }

    setMensaje("");
    setMoneda(0); // Reiniciar cantidad de moneda después de enviar mensaje
  };

  return (
    <div className="chat-container">
      <div className="result-container">
        {mensajes.map((msg, i) => (
          <div
            key={i}
            className={msg.type === "usuario" ? "user-message" : "bot-message"}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        className="chat-input"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        placeholder="Escribe tu mensaje..."
      />
      <button className="chat-button" onClick={handleEnviarMensaje}>
        Enviar
      </button>
      {moneda !== 0 && (
        <div className="conversion-container">
          <input
            type="number"
            className="chat-input"
            value={moneda}
            onChange={(e) => setMoneda(e.target.value)}
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
        </div>
      )}
    </div>
  );
}

export default Chat;
