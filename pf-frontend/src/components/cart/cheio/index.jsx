import { useState } from "react";
import "./style.css";
import { Link } from 'react-router-dom';

export default function Carrinho() {
  const [expandido, setExpandido] = useState(true);

  const produtosIniciais = [
    {
      id: 1,
      nome: "Med Snack - Petisco para Medicamentos",
      preco: 29.99,
      imagem: "/img/cart/recomendacoes-img/medsnack.png",
      vendedor: "Pawfect",
      quantidade: 1,
    },
    { 
      id: 2,
      nome: "Petisco sabor Frango",
      preco: 29.99,
      imagem: "/img/cart/recomendacoes-img/medsnack.png",
      vendedor: "Pawfect",
      quantidade: 1,
    },
  ];

  const [produtos, setProdutos] = useState(produtosIniciais);

  function alterarQuantidade(id, delta) {
    setProdutos((produtosAtuais) =>
      produtosAtuais.map((p) =>
        p.id === id
          ? { ...p, quantidade: Math.max(1, p.quantidade + delta) }
          : p
      )
    );
  }

  const totalGeral = produtos.reduce(
    (acc, produto) => acc + produto.preco * produto.quantidade,
    0
  );

  return (
    <div className="carrinho">
      <p className="titulo">Meu carrinho</p>

      <div className={`conteudo ${!expandido ? "miniatura" : ""}`}>
        <div className="itens">
          <div className="topo">
            <p>
              Pawfect (
              {produtos.reduce((acc, p) => acc + p.quantidade, 0)} itens)
            </p>
            <button onClick={() => setExpandido(!expandido)}>
              <img
                className="seta-cart"
                src={
                  expandido
                    ? "/img/cart/seta-cima.png"
                    : "/img/cart/seta-baixo.png"
                }
                alt="Abrir ou fechar"
              />
            </button>
          </div>

          {expandido ? (
            <div>
              {produtos.map((produto, index) => (
                <div
                  key={produto.id}
                  className={`item ${
                    index === produtos.length - 1 ? "sem-linha" : ""
                  }`}
                >
                  <img src={produto.imagem} alt="Produto" className="foto" />

                  <div className="info">
                    <p>{produto.nome}</p>
                    <small>Vendido por {produto.vendedor}</small>
                  </div>

                  <div className="acoes">
                    <div className="quantidade">
                      <button onClick={() => alterarQuantidade(produto.id, -1)}>
                        -
                      </button>
                      <span className="quantidade-n">{produto.quantidade}</span>
                      <button onClick={() => alterarQuantidade(produto.id, 1)}>
                        +
                      </button>
                    </div>
                    <p className="preco-q">
                      R$ {(produto.preco * produto.quantidade).toFixed(2)}
                    </p>
                    <img
                      className="lixeira-cart"
                      src="/img/cart/lixeira.png"
                      alt="Remover"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="miniaturas">
              {(() => {
                const imagensExpandida = produtos.flatMap((produto) =>
                  Array(produto.quantidade).fill(produto.imagem)
                );
                const imagensLimitadas = imagensExpandida.slice(0, 18);
                const temMais = imagensExpandida.length > 18;

                return (
                  <>
                    {imagensLimitadas.map((src, i) => (
                      <img key={i} src={src} alt="Produto" className="mini" />
                    ))}
                    {temMais && <div className="mais-itens">...</div>}
                    <span>R$ {totalGeral.toFixed(2)}</span>
                  </>
                );
              })()}
            </div>
          )}
        </div>

        <div className="resumo">
          <h2>Resumo do pedido</h2>

          <div className="linhas">
            <div>
              <span>
                Produtos ({produtos.reduce((acc, p) => acc + p.quantidade, 0)})
              </span>
              <span>R$ {totalGeral.toFixed(2)}</span>
            </div>
            <div>
              <span>Descontos</span>
              <span>R$ 0,00</span>
            </div>
            <div>
              <span>Subtotal</span>
              <span>R$ {totalGeral.toFixed(2)}</span>
            </div>
            <div>
              <span>Frete</span>
              <span>R$ 0,00</span>
            </div>
            <div className="total">
              <span>Total:</span>
              <span>R$ {totalGeral.toFixed(2)}</span>
            </div>
          </div>

          {expandido && (
            <>
             <Link to="#" className="comprar-btn">
              <p>Comprar</p>
             </Link>

            <Link to="/" className="btn">
              <p>Continuar comprando</p>
            </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

