import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useSelector, useDispatch } from "react-redux";
import { fecthAllData } from "../actions";

export default function Card(props) {
  const dispatch = useDispatch();
  return (
    <div className="card" id="postCard">
      <div className="dateLine">
        <h6>23/25/42</h6>
      </div>
      <h2>hola</h2>
      <h4>
        {" "}
        hola
        ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssscomo
        andan todos
      </h4>
      <div className="btnLine">
        <button
          onClick={() => dispatch(fecthAllData())}
          className="aBtn"
          id="like"
        >
          Like (1)
        </button>
        <button className="aBtn" id="dislike">
          Dislike (2)
        </button>
      </div>
    </div>
  );
}
