import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import axios from "axios";

export default function NewCard(props) {
  const [isActive, setIsActive] = useState(true);
  const [postData, setPostData] = useState({ nombre: "", contenido: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    console.log(postData);
  };

  const publishPost = (e) => {
    const ano = new Date().getFullYear();
    const mes = new Date().getMonth();
    const dia = new Date().getDate();
    axios.post("https://posting-test.herokuapp.com/newpost/addnewpost", {
      post_name: postData.nombre,
      post_content: postData.contenido,
      post_date: `${ano}/${mes + 1}/${dia}`,
    });
    window.location.reload();
  };

  return (
    <div className="card" id="newPosts">
      {isActive ? (
        <div>
          <div>
            <h5>Titulo</h5>
            <input name="nombre" onChange={(e) => handleChange(e)}></input>
          </div>
          <div>
            <h5>Contenido</h5>
            <input name="contenido" onChange={(e) => handleChange(e)}></input>
          </div>
          <button onClick={(e) => publishPost(e)}>Publicar</button>
        </div>
      ) : (
        <h1>Nuevo Post</h1>
      )}
    </div>
  );
}
