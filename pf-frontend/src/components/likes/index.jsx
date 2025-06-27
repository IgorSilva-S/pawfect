import React from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
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
    const Navigate = useNavigate()

  useEffect(() => {
    const gWL = async () => {
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
        return;
      }

      let resMsg = await tokenData.json()
      let user = resMsg.user
      let allWishes = await fetch(`http://localhost:3000/api/wish/list/user/${user.email}`, {
        method: 'GET'
      })
      let allProd = await fetch(`http://localhost:3000/api/product/list/all`, {
        method: 'GET'
      })
      let wishes = await allWishes.json()
      wishes = wishes.wishList
      let prods = await allProd.json()
      prods = prods.data.products
      wishes.forEach(wish => {
        let keyId = wish.prodId - 1
        let d = document.createElement('div')
        d.className = 'favorito'
        d.key = wish.id
        let dimg = document.createElement('div')
        dimg.className = 'favorito-img-container'
        let img = document.createElement('img')
        img.className = 'favorito-img'
        img.src = prods[keyId].imageLink
        img.alt = prods[keyId].prodName
        let sc = document.createElement('div')
        sc.className = 'nota'
        let pSc = document.createElement('p')
        pSc.innerText = prods[keyId].avaliation
        let starImg = document.createElement('img')
        starImg.src = "/img/cart/star.png"
        starImg.alt = "Estrela"
        sc.insertAdjacentElement('beforeend', starImg)
        sc.insertAdjacentElement('beforeend', pSc)
        dimg.insertAdjacentElement('beforeend', img)
        dimg.insertAdjacentElement('beforeend', sc)
        let pName = document.createElement('p')
        let pVal = document.createElement('p')
        pName.className = 'favorito-p'
        pVal.className = 'favorito-preco'
        pName.innerHTML = prods[keyId].prodName
        pVal.innerHTML = `R$ ${prods[keyId].prodValue}`
        let fbs = document.createElement('div')
        fbs.className = 'favorito-bs'
        fbs.innerHTML = `
          <button class="favorito-b">
                <img src="/img/menu/carrinho.png" alt="Adicionar ao carrinho" />
              </button>
              <button class="favorito-b">
                <img id="remove-fav" src="/img/likes/coração-remover.png" alt="Adicionar aos favoritos" />
              </button>
        `
        d.insertAdjacentElement('beforeend', dimg)
        d.insertAdjacentElement('beforeend', pName)
        d.insertAdjacentElement('beforeend', pVal)
        d.insertAdjacentElement('beforeend', fbs)
        document.getElementById('container-favoritos').insertAdjacentElement('beforeend', d)
      });
    }

    gWL()
  }, [])

  return (
    <div id="favoritos">
      <p id="title-favoritos">Favoritos:</p>
      <div id="container-favoritos">
        {/* {produtosRecomendados.map((produto) => (
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
        ))} */}
      </div>
    </div>
  );
}

