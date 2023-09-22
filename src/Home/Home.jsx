import { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="home-container">

      <h1 className="home-title">Descubra a Beleza das Pedras Preciosas</h1>
      <h2>Explore a coleção mais deslumbrante de pedras preciosas do mundo.</h2>
      <a href='http://localhost:5173/todo'><button>Saiba mais</button></a>
    </div>
  );
}