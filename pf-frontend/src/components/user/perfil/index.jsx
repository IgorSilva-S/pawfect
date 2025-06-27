import React from "react";
import "./style.css";
import imgperfil from "/img/perfil/perfil-img.png"; 
import { Link, useNavigate } from 'react-router-dom'

export default function Perfil() {
  const Navigate = useNavigate()

  const exit = () => {
    localStorage.removeItem('token')
    Navigate('/user')
  }

  return (
    <div className="perfil-container">

      <div className="header">
        <p className="title">MEU PERFIL</p>
        <img src={imgperfil} alt="Gato e cachorro" className="perfil-img" />
        <div className="subtitle"><p>Acompanhe os seus pedidos!</p></div>
      </div>

      <div className="options">

         <Link to="/pedidos/vazio">
                 <div className="option">
                   <img src="/img/perfil/pedidos-button.png" alt="Pedidos" className="img-button1"/>
                 </div>
         </Link>

         <Link to="/dados">
                 <div className="option">
                   <img src="/img/perfil/user-button.png" alt="Dados" className="img-button2"/>
                 </div>
         </Link>

        <div className="option" onClick={exit}>
          <img src="/img/perfil/out-button.png" alt="Sair" className="img-button3"/>
        </div> 
      </div>

      <div className="text-buttons">
        <p className="text-button1">Meus Pedidos</p>
        <p className="text-button2">Meus Dados</p>
        <p className="text-button3">Sair</p>
      </div>

    </div>
  );
}
