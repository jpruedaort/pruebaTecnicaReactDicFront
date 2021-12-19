import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Card from "../components/card";

import "./main.css";

export default function Main() {
  return (
    <div className="mainMain">
      <Navbar />
      <div className="cardDeck">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}
