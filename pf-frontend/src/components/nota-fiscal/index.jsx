import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

export default function NotaFiscal() {
  return (
    <div className="fiscal-container">
      <p className="fiscal-p">Compra realizada!</p>
      <img className="fiscal-img" src="/img/nota-fiscal/fiscal.png"></img>
      <div className="fiscal-btns">
        <Link to="/">
          <button className="fiscal-btn">Voltar para o ínicio</button>
        </Link>
        <Link to="/pedidos">
          <button className="fiscal-btn">Ir para meus pedidos</button>
        </Link>
      </div>
    </div>
  );
}