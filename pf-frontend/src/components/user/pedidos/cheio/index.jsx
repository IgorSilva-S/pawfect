import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

// examples (chenge with the right backending)
export default function Pedidos() {

  const [pedidos, setPedidos] = useState([])
  const Navigate = useNavigate()

  useEffect(() => {
    const getTransactions = async () => {
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
        const transRes = await fetch(`http://localhost:3000/api/transaction/list/user/${user.email}`);
        let jsonCart = await transRes.json()
        jsonCart = jsonCart.transaction
        const productsRes = await fetch('http://localhost:3000/api/product/list/all');
        const prods = (await productsRes.json()).data.products;
        const transData = jsonCart.map(comprinha => {
          const product = prods.find(produtin => produtin.id === comprinha.prodId);
          return { ...product, transId: comprinha.id, qnt: comprinha.qnt, purchasedAt: comprinha.transDate };
        });
        setPedidos(transData)
        console.log(transData)
      } catch (err) {
        console.error(`Tivemos um probleminha 🫠: ${err.message}`)
      }
    }

    getTransactions()
  }, [])
  // const pedidos = [
  //   {
  //     nome: 'Ração Meu Cão Adulto Raças Pequenas Frango E Arroz 15kg',
  //     preco: 'R$ 29,99',
  //     data: '21/09/2025',
  //     imagem: '/img/cart/recomendacoes-img/medsnack.png',
  //     link: '#'
  //   },
  //   {
  //     nome: 'Ração Meu Cão Adulto Raças Pequenas Frango E Arroz 15kg',
  //     preco: 'R$ 29,99',
  //     data: '21/09/2025',
  //     imagem: '/img/cart/recomendacoes-img/medsnack.png',
  //     link: '#'
  //   }
  // ];

 return (
  <div className="pedidos-container">
    <p className="pedidos-titulo">Meus pedidos</p>
    <div className="pedidos-lista">
      {pedidos.map((p, i) => {
        const dataFormatada = new Intl.DateTimeFormat("pt-BR", {
          dateStyle: "short",
          timeStyle: "short",
          timeZone: "America/Sao_Paulo"
        }).format(new Date(p.purchasedAt));

        return (
          <div className="pedido-card" key={i}>
            <img src={p.imageLink} alt={p.prodName} className="pedido-img" />
            <div className="pedido-info">
              <p className="pedido-nome">{p.prodName}</p>
              <p className="pedido-preco">Quantidade: {p.qnt}</p>
              <p className="pedido-preco">Valor único: R$ {(Number(p.prodValue)).toFixed(2)}</p>
              <p className="pedido-preco">Valor total: R$ {(Number(p.prodValue) * p.qnt).toFixed(2)}</p>
              <p className="pedido-data">Comprado em {dataFormatada}</p>
              <a href={p.link} className="pedido-link">
                Rastrear pedido via site da transportadora
              </a>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
}

