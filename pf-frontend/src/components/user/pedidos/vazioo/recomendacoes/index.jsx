import React from "react";
import "./style.css";

// Esta parte vai simular dados que viriam do back futuramente.
const produtosRecomendados = [
  {
    id: 1,
    nome: "Med Snack - Petisco para Medicamentos",
    imagem: "/img/cart/recomendacoes-img/medsnack.png",
    nota: 4.9,
    preco: 9.90,
  },
];  

export default function Recomendacoes() {
  return (
    <div id="recomendacoes">
      <p id="title-recomendacoes">Recomendações:</p>
      <div id="container-recomendacoes">
        {produtosRecomendados.map((produto) => (
          <div key={produto.id} className="recomendacao">
            <div className="recomendacao-img-container">
              <img className="recomendacao-img" src={produto.imagem} alt={produto.nome} />
              <div className="nota">
                <p className="nota-p">{produto.nota}</p>
                <img src="/img/cart/star.png" alt="Estrela" />
              </div>
            </div>
            <p className="recomendacao-p">{produto.nome}</p>
            <p className="recomendacao-preco">R$ {produto.preco.toFixed(2)}</p>
            <div className="recomendacao-bs">
              <button className="recomendacao-b">
                <img src="/img/menu/carrinho.png" alt="Adicionar ao carrinho" />
              </button>
              <button className="recomendacao-b">
                <img src="/img/menu/favs.png" alt="Adicionar aos favoritos" />
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
