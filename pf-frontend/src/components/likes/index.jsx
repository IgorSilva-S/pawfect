import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./style.css";

export default function Favoritos() {
  const navigate = useNavigate();
  const [wishes, setWishes] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const token = localStorage.getItem('token');
        const tokenRes = await fetch('http://localhost:3000/api/user/profile/', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`
          }
        });

        if (!tokenRes.ok) {
          navigate('/user');
          return;
        }

        const { user } = await tokenRes.json();

        const wishesRes = await fetch(`http://localhost:3000/api/wish/list/user/${user.email}`);
        const productsRes = await fetch('http://localhost:3000/api/product/list/all');
        const wishList = (await wishesRes.json()).wishList;
        const prods = (await productsRes.json()).data.products;

        const favoritosData = wishList.map(wish => {
          const product = prods.find(prod => prod.id === wish.prodId);
          return { ...product, wishId: wish.id };
        });

        setWishes(favoritosData);
      } catch (err) {
        console.error("Erro ao buscar favoritos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWishes();
  }, []);

  if (loading) return <p>Carregando favoritos...</p>;

  const delWish = async (id) => {
    try {
      const resp = await fetch(`http://localhost:3000/api/wish/remove/${id}`, {
        method: 'DELETE'
      })
      if (resp.ok) {
        location.reload();
      }
    } catch (err) {
      console.error(`Tivemos um probleminha 🫠: ${err}`)
    }
  }

  const addCart = async (id) => {
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
        navigate('/user')
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

      navigate('/cart')

    } catch (err) {
      console.error(`Tivemos um probleminha 🫠: ${err}`)
    }
  }

  return (
    <div id="favoritos">
      <p id="title-favoritos">Favoritos:</p>
      <div id="container-favoritos">
        {wishes.map((produto) => (
          <div key={produto.id} className="favorito">
            <div className="favorito-img-container">
              <img className="favorito-img" src={produto.imageLink} alt={produto.prodName} />
              <div className="nota">
                <p className="nota-p">{produto.avaliation}</p>
                <img src="/img/cart/star.png" alt="Estrela" />
              </div>
            </div>
            <p className="favorito-p">{produto.prodName}</p>
            <p className="favorito-preco">R$ {Number(produto.prodValue).toFixed(2)}</p>
            <div className="favorito-bs">
              <button className="favorito-b" onClick={() => {addCart(produto.id)}}>
                <img src="/img/menu/carrinho.png" alt="Adicionar ao carrinho" />
              </button>
              <button className="favorito-b" onClick={() => { delWish(produto.wishId) }}>
                <img src="/img/likes/coração-remover.png" alt="Remover dos favoritos" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}