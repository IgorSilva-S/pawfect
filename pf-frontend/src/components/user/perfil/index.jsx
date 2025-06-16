import React from "react";
import "./style.css";
import imgperfil from "/img/perfil/perfil-img.png"; 
import dadosbutton from "/img/perfil/user-button.png";    
import outbutton from "/img/perfil/out-button.png";
import pedidosbutton from "/img/perfil/pedidos-button.png";   

export default function Perfil() {
  return (
    <div className="perfil-container">

      <div className="header">
        <p className="title">MEU PERFIL</p>
        <img src={imgperfil} alt="Gato e cachorro" className="perfil-img" />
        <p className="subtitle">Acompanhe os seus pedidos!</p>
      </div>

      <div className="options">
        <div className="option">
          <div className="img-button" src={pedidosbutton} alt="Pedidos"></div>
          <span>Meus pedidos</span>
        </div>
        <div className="option">
          <div className="img-button" src={dadosbutton} alt="Dados"></div>
          <span>Meus dados</span>
        </div>
        <div className="option">
          <div className="img-button" src={outbutton} alt="Sair"></div>
          <span>Sair</span>
        </div>
      </div>
    </div>
  );
}
