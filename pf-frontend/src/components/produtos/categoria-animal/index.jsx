import { useParams } from 'react-router-dom';
import { categoriasPorAnimal } from '../dados/categorias';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function PaginaCategoriaAnimal() {
  const Navigate = useNavigate()
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
        return
      }
      let resMsg = await tokenData.json()
      let user = resMsg.user
      console.log(user.id)
      console.log(id)
      let prodId = id
      let userId = user.id

      try {
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

      document.getElementById('added').innerHTML = 'Adicionado aos Favoritos!'
      document.getElementById('added').style.display = 'block'
      setTimeout(() => {
        document.getElementById('added').style.opacity = '0'
      }, 2600);
      setTimeout(() => {
        document.getElementById('added').removeAttribute('style')
      }, 3000);

    } catch (err) {
      console.error(`Tivemos um probleminha 🫠: ${err}`)
    }
  }

  
  const sentCart = async (id) => {
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
        return
      }
      let resMsg = await tokenData.json()
      let user = resMsg.user
      console.log(user.id)
      console.log(id)
      let prodId = id
      let userId = user.id

      try {
        await fetch('http://localhost:3000/api/cart/add', {
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

      document.getElementById('added').innerHTML = 'Adicionado ao Carrinho!'
      document.getElementById('added').style.display = 'block'
      setTimeout(() => {
        document.getElementById('added').style.opacity = '0'
      }, 2600);
      setTimeout(() => {
        document.getElementById('added').removeAttribute('style')
      }, 3000);

    } catch (err) {
      console.error(`Tivemos um probleminha 🫠: ${err}`)
    }
  }

  return (
    <div className="categoria-container">
      <div className="categoria-header">
        <button onClick={() => { let pastPage = sessionStorage.getItem('lastPage'); Navigate(pastPage) }} className='backButton'>←</button>
        <p className="p-categoria-animal">{categoria.nome}</p>
      </div>

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
              <button className="categoria-b"  onClick={() => { sentCart(produto.id) }}>
                <img src="/img/menu/carrinho.png" alt="Adicionar ao carrinho" />
              </button>
              <button className="categoria-b" onClick={() => { sentWish(produto.id) }}>
                <img src="/img/menu/favs.png" alt="Adicionar aos favoritos" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="added" id="added">
        Adicionado aos Favoritos!
      </div>
    </div>
  );
}