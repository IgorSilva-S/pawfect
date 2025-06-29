import { useParams } from 'react-router-dom';
import { categoriasPorAnimal } from '../dados/categorias';
import { useState, useEffect } from 'react';
import './style.css';

export default function PaginaCategoriaAnimal() {
  const { animal, id } = useParams();
  const [categoria, setCategoria] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProds = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/product/list/${animal}/${id}`);
        const data = await response.json();
        const catProds = data.data.catProds;
        const arrayid = id - 1;

        const prodData = {
          nome: categoriasPorAnimal[animal][arrayid].nome,
          produtos: catProds,
        };

        setCategoria(prodData);
        console.log(prodData)
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setCategoria(null);
      } finally {
        setLoading(false);
      }
    };

    getProds();
    console.log(animal, id);
  }, [animal, id]);

  if (loading) return <p>Carregando...</p>;
  if (!categoria) return <p>Categoria não encontrada.</p>;

  const sentWish = async (id) => {
    try {
      let token = localStorage.getItem('token')
      let tokenData = await fetch('http://localhost:3000/api/user/profile/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `bearer ${token}`
        },
      })

      if (tokenData.ok) {
        console.log('Token OK')
      } else {
        Navigate('/user')
      }
      let resMsg = await tokenData.json()
      let user = resMsg.user
      console.log(user.id)
      console.log(id)
      let prodId = id
      let userId = user.id

      await fetch('http://localhost:3000/api/wish/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          "prodId": prodId,
          "userId": userId
        })
      })
    } catch (err) {
      console.error(`Tivemos um probleminha 🫠: ${err}`)
    }
  }

  return (
    <div className="categoria-container">
      <p className="p-categoria-animal">{categoria.nome}</p>

      <div id="container-categoria">
        {categoria.produtos.map((produto, index) => (
          <div key={index} className="categoria-item">
            <div className="categoria-img-container">
              <img
                className="categoria-img"
                src={produto.imageLink}
                alt={produto.prodName}
              />
              <div className="nota">
                <p className="nota-p">{produto.avaliation}</p>
                <img src="/img/cart/star.png" alt="Estrela" />
              </div>
            </div>
            <p className="categoria-p">{produto.prodName}</p>
            <p className="categoria-preco">R$ {Number(produto.prodValue).toFixed(2)}</p>
            <div className="categoria-bs">
              <button className="categoria-b">
                <img src="/img/menu/carrinho.png" alt="Adicionar ao carrinho" />
              </button>
              <button className="categoria-b" onClick={() => { sentWish(produto.id) }}>
                <img src="/img/menu/favs.png" alt="Adicionar aos favoritos" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}