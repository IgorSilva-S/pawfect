import React from "react";
import "./style.css";

// Esta parte vai simular dados que viriam do back futuramente.
const produtosRecomendados = [
  {
    id: 1,
    nome: "Med Snack - Petisco para Medicamentos",
    imagem: "/img/likes/medsnack.png",
    nota: 4.9,
    preco: 9.90,
  },
];

export default function favoritos() {
  return (
    <div id="favoritos">
      <p id="title-favoritos">Favoritos:</p>
      <div id="container-favoritos">
        {produtosRecomendados.map((produto) => (
          <div key={produto.id} className="favorito">
            <div className="favorito-img-container">
              <img className="favorito-img" src={produto.imagem} alt={produto.nome} />
              <div className="nota">
                <p className="nota-p">{produto.nota}</p>
                <img src="/img/cart/star.png" alt="Estrela" />
              </div>
            </div>
            <p className="favorito-p">{produto.nome}</p>
            <p className="favorito-preco">R$ {produto.preco.toFixed(2)}</p>
            <div className="favorito-bs">
              <button className="favorito-b">
                <img src="/img/menu/carrinho.png" alt="Adicionar ao carrinho" />
              </button>
              <button className="favorito-b">
                <img id="remove-fav" src="/img/likes/coração-remover.png" alt="Adicionar aos favoritos" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

