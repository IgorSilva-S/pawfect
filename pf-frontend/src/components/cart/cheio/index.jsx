import { useState, useEffect } from "react";
import "./style.css";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Carrinho() {
  const [produtos, setProdutos] = useState([]);
  const Navigate = useNavigate()

  useEffect(() => {
    const getCart = async () => {
      try {
        const token = localStorage.getItem('token');
        const tokenRes = await fetch('http://localhost:3000/api/user/profile/', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`
          }
        });

        if (!tokenRes.ok) {
          Navigate('/user');
          return;
        }

        const { user } = await tokenRes.json();

        const cartRes = await fetch(`http://localhost:3000/api/cart/list/user/${user.email}`);
        let jsonCart = await cartRes.json()
        jsonCart = jsonCart.cart
        const productsRes = await fetch('http://localhost:3000/api/product/list/all');
        const prods = (await productsRes.json()).data.products;
        const cartData = jsonCart.map(comprinha => {
          const product = prods.find(produtin => produtin.id === comprinha.prodId);
          return { ...product, cartId: comprinha.id };
        });
        setProdutos(cartData)
        document.getElementById('loadingProds').style.display = 'none'

      } catch (err) {
        console.error(`Tivemos um probleminha aqui 🫠: ${err.message}`)
      }

    }

    getCart()
  }, [])

  const removeCart = async (id) => {
    try {
      const delRes = await fetch(`http://localhost:3000/api/cart/remove/${id}`, {
        method: 'DELETE'
      })


      if (delRes.ok) {
        Navigate('/cart')
      }
    } catch (err) {
      console.error(`Tivemos um probleminha aqui 🫠: ${err.message}`)
    }
  }

  const purchaseItem = async (id, cId) => {
    try {
      const token = localStorage.getItem('token');
      const tokenRes = await fetch('http://localhost:3000/api/user/profile/', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `bearer ${token}`
        }
      });

      if (!tokenRes.ok) {
        Navigate('/user');
        return;
      }

      const { user } = await tokenRes.json();
      const purchaseFetch = await fetch('http://localhost:3000/api/transaction/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "userId": user.id,
          "prodId": id,
          "qnt": Number(document.getElementById(`${cId}Inp`).value)
        })
      })

      if (purchaseFetch.ok) {
        const pFetch = await purchaseFetch.json()
        sessionStorage.setItem('tId', pFetch.transaction.id)
        await fetch(`http://localhost:3000/api/cart/remove/${id}`, {
          method: 'DELETE'
        })
        Navigate('/nota-fiscal')
        return;
      }
    } catch (err) {
      console.error(`Tivemos um probleminha aqui 🫠: ${err.message}`)
    }
  }

  return (
    <div className="carrinho">
      <p className="titulo">Meu carrinho</p>

      <div className={`conteudo`}>
        <div className="itens">
          <div className="topo">
            <p>
              Pawfect ({produtos.length} {produtos.length === 1 ? 'item' : 'itens'})
            </p>
            <div className="prodLoadingSpin" id="loadingProds"></div>
          </div>

          <div>
            {produtos.map((produto, index) => (
              <div
                key={produto.id}
                className={`item ${index === produtos.length - 1 ? "sem-linha" : ""
                  }`}
              >
                <img src={produto.imageLink} alt="Produto" className="foto" />

                <div className="info">
                  <p>{produto.prodName}</p>
                </div>

                <div className="acoes">
                  {/* <div className="quantidade">
                      <button onClick={() => alterarQuantidade(produto.id, -1)}>
                        -
                      </button>
                      <span className="quantidade-n">{produto.quantidade}</span>
                      <button onClick={() => alterarQuantidade(produto.id, 1)}>
                        +
                      </button>
                    </div> */}
                  <p className="preco-q">
                    R$ {(Number(produto.prodValue)).toFixed(2)}
                  </p>
                  <div>
                    <label htmlFor={`${produto.cartId}Inp`}>Quantidade:</label>
                    <input type="number" name="" id={`${produto.cartId}Inp`} min="1" className="numInp" defaultValue={1} onChange={() => {
                      if (document.getElementById(`${produto.cartId}Inp`).value < 0) {
                        document.getElementById(`${produto.cartId}Inp`).value = 1
                      }
                    }} />
                  </div>
                  <button className="btn" onClick={() => { purchaseItem(produto.id, produto.cartId) }}>
                    Comprar
                  </button>
                  <img
                    className="lixeira-cart"
                    src="/img/cart/lixeira.png"
                    alt="Remover"
                    onClick={() => { removeCart(produto.cartId) }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

