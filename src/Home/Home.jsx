import { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="home-container">
      <img src="https://cdn.discordapp.com/attachments/887389770681032735/1154657551858806835/Banner_promocao_halloween_preto_branco_e_roxo.png" alt="Banner" />
      <h1 className="home-title">Descubra a Beleza das Pedras Preciosas</h1>
      <h2>Explore a coleção mais deslumbrante de pedras preciosas do mundo.</h2>
      <a href='http://localhost:5173/todo'><button>Saiba mais</button></a>
    </div>
  );
}