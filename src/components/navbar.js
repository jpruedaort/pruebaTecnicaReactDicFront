import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link, useHistory } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="navDiv">
        <h1>POSTS</h1>
      </div>
      <div className="navDiv" id="itemPart">
        <ul>
          <Link to="/">
            <li>Posts</li>
          </Link>
          <Link to="/grupos">
            <li>Grupos</li>
          </Link>
          <Link to="/mensajes">
            <li>Mensajes</li>
          </Link>
          <Link to="/perfil">
            <li>Perfil</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
