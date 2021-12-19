import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./routes/main";
import Perfil from "./routes/perfil";
import Mensajes from "./routes/mensajes";
import Grupos from "./routes/grupos";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/perfil" element={<Perfil />} />
        <Route exact path="/mensajes" element={<Mensajes />} />
        <Route exact path="/grupos" element={<Grupos />} />
      </Routes>
    </Router>
  );
}

export default App;
