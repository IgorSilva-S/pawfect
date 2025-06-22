import React from "react";
import "./style.css";

// examples (chenge with the right backending)
export default function Pedidos() {
  const pedidos = [
    {
      nome: 'Ração Meu Cão Adulto Raças Pequenas Frango E Arroz 15kg',
      preco: 'R$ 29,99',
      data: '21/09/2025',
      imagem: '/img/cart/recomendacoes-img/medsnack.png',
      link: '#'
    },
    {
      nome: 'Ração Meu Cão Adulto Raças Pequenas Frango E Arroz 15kg',
      preco: 'R$ 29,99',
      data: '21/09/2025',
      imagem: '/img/cart/recomendacoes-img/medsnack.png',
      link: '#'
    }
  ];

  return (
    <div className="pedidos-container">
      <p className="pedidos-titulo">Meus pedidos</p>
      <div className="pedidos-lista">
        {pedidos.map((p, i) => (
          <div className="pedido-card" key={i}>
            <img src={p.imagem} alt={p.nome} className="pedido-img" />
            <div className="pedido-info">
              <p className="pedido-nome">{p.nome}</p>
              <p className="pedido-preco">{p.preco}</p>
              <p className="pedido-data">Comprado em {p.data}</p>
              <a href={p.link} className="pedido-link">
                Rastrear pedido via site da transportadora
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

