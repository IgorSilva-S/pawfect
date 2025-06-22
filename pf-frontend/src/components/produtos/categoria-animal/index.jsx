import { useParams } from 'react-router-dom';
import { categoriasPorAnimal } from '../dados/categorias';
import './style.css';

export default function PaginaCategoriaAnimal() {
  const { animal, id } = useParams();
  const categorias = categoriasPorAnimal[animal];

  if (!categorias) return <p>Animal não encontrado.</p>;

  const categoria = categorias.find((cat) => cat.id === id);
  if (!categoria) return <p>Categoria não encontrada.</p>;

  // Produto de teste 
  const produtosTeste = [
    {
      nome: "Med Snack - Petisco para Medicamentos",
      imagem: "/img/cart/recomendacoes-img/medsnack.png",
      nota: 4.9,
      preco: 9.90,
    },
  ];

  const produtosParaMostrar = categoria.produtos && categoria.produtos.length > 0
    ? categoria.produtos
    : produtosTeste;

  return (
    <div className="categoria-container">
      <p className='p-categoria-animal'>{categoria.nome}</p>

      <div id="container-categoria">
        {produtosParaMostrar.map((produto, index) => (
          <div key={index} className="categoria-item">
            <div className="categoria-img-container">
              <img
                className="categoria-img"
                src={produto.imagem}
                alt={produto.nome}
              />
              <div className="nota">
                <p className="nota-p">{produto.nota}</p>
                <img src="/img/cart/star.png" alt="Estrela" />
              </div>
            </div>
            <p className="categoria-p">{produto.nome}</p>
            <p className="categoria-preco">R$ {produto.preco.toFixed(2)}</p>
            <div className="categoria-bs">
              <button className="categoria-b">
                <img src="/img/menu/carrinho.png" alt="Adicionar ao carrinho" />
              </button>
              <button className="categoria-b">
                <img src="/img/menu/favs.png" alt="Adicionar aos favoritos" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
