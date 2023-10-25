import React, { useState } from "react";
import { postMensaje } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";

function Chat() {
  const dispatch = useDispatch();
  const enviar = useSelector((state) => state.mensajes);
  const [newMensaje, setMensaje] = useState("");

  const handleEnvioMensaje = () => {
    if (newMensaje) {
      dispatch(postMensaje(newMensaje));
      setMensaje("");
    }
  };
  return (
    <div>
      <div>
        {enviar.map((e, i) => (
          <div key={i}>{e.text}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribe un mensaje..."
        />
      </div>
      <button onClick={handleEnvioMensaje}>Enviar</button>
    </div>
  );
}
export default Chat;
