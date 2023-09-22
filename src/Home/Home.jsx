import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    
    <div className="home-container">
      <h1 className="home-title">Página Inicial</h1>
      <a href='http://localhost:5173/todo'><button>Lista de Joias preciosas</button></a>
    </div>
  );
}
