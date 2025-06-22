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

export default function subcategorias() {
  return (
    <div id="subcategorias">
      <p id="title-subcategorias">Varinhas:</p>
      <div id="container-subcategorias">
        {produtosRecomendados.map((produto) => (
          <div key={produto.id} className="subcategoria">
            <div className="subcategoria-img-container">
              <img className="subcategoria-img" src={produto.imagem} alt={produto.nome} />
              <div className="nota">
                <p className="nota-p">{produto.nota}</p>
                <img src="/img/cart/star.png" alt="Estrela" />
              </div>
            </div>
            <p className="subcategoria-p">{produto.nome}</p>
            <p className="subcategoria-preco">R$ {produto.preco.toFixed(2)}</p>
            <div className="subcategoria-bs">
              <button className="subcategoria-b">
                <img src="/img/menu/carrinho.png" alt="Adicionar ao carrinho" />
              </button>
              <button className="subcategoria-b">
                <img id="fav" src="/img/menu/favs.png" alt="Adicionar aos favoritos" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

