import "./App.css";
import { Route } from "react-router-dom";
import { Login } from "./Components/Login.jsx";
import { Chat } from "./Components/Chat.jsx";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/chat" component={Chat} />
    </div>
  );
}

export default App;
