import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Página Inicial</h1>
      <Link to="/todo" className="todo-link">
        Todo
      </Link>
    </div>
  );
}
