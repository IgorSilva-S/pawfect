import React from "react";
import "./style.css";
import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function Vazio() {
  return (
    <div id="bloco-vazio">
      <img src="../../../../public/img/cart/carrinho-vazio.png" alt="Carrinho vazio"></img>
      <p>Não há pedidos comprados  ainda!</p>
      <Link to="/">
        <button>Voltar para o início</button>
     </Link>
    </div>
  );
}