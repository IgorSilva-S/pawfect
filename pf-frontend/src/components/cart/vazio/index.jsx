import React from "react";
import "./style.css";



export default function Vazio() {
  return (
    <div id="bloco-vazio">
      <img src="../../../../public/img/cart/carrinho-vazio.png" alt="Carrinho vazio"></img>
      <p>Seu carrinho está vazio!</p>
      <button>Voltar para o início</button>
    </div>
  );
}