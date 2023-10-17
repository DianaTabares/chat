import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Chat from "./Components/Chat.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
