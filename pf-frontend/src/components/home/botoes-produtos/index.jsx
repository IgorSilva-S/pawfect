import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

export default function BotoesProdutos() {
  return (
    <div>
      <div id="botoes-produtos">
        <div>
          <Link to="/gatos">
            <button className="botao-produto">
              <img
                src="../../../../public/img/animais-produtos/produtos-gatos.png"
                alt="Produtos para Gatos"
              />
            </button>
          </Link>
          <p className="texto-bp">Produtos para Gatos</p>
        </div>

        <div>
          <Link to="/caes">
            <button className="botao-produto">
              <img
                src="../../../../public/img/animais-produtos/produtos-caes.png"
                alt="Produtos para Cães"
              />
            </button>
          </Link>
          <p className="texto-bp">Produtos para Cães</p>
        </div>

        <div>
          <Link to="/passaros">
            <button className="botao-produto">
              <img
                src="../../../../public/img/animais-produtos/produtos-passaros.png"
                alt="Produtos para Passáros"
              />
            </button>{" "}
          </Link>
          <p className="texto-bp">Produtos para Pássaros</p>
        </div>

        <div>
          <Link to="/roedores">
            <button className="botao-produto">
              <img
                src="../../../../public/img/animais-produtos/produtos-roedores.png"
                alt="Produtos para Roedores"
              />
            </button>
          </Link>
          <p className="texto-bp">Produtos para Roedores</p>
        </div>

        <div>
          <Link to="/peixes">
            <button className="botao-produto">
              <img
                src="../../../../public/img/animais-produtos/produtos-peixes.png"
                alt="Produtos para Peixes"
              />
            </button>{" "}
          </Link>
          <p className="texto-bp">Produtos para Peixes</p>
        </div>
      </div>
    </div>
  );
}
