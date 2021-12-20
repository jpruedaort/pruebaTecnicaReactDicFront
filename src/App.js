import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./routes/main";
import Perfil from "./routes/perfil";
import Mensajes from "./routes/mensajes";
import Grupos from "./routes/grupos";
import React, { useEffect, useState, createContext } from "react";

//Crear Contexto

export const genContext = createContext();

function App() {
  const [newPost, setNewPost] = useState(false);

  const toogleNewPost = (e) => {
    setNewPost(!newPost);
  };

  const value = { toogleNewPost, newPost };

  return (
    <genContext.Provider value={value}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/perfil" element={<Perfil />} />
          <Route exact path="/mensajes" element={<Mensajes />} />
          <Route exact path="/grupos" element={<Grupos />} />
        </Routes>
      </Router>
    </genContext.Provider>
  );
}

export default App;
