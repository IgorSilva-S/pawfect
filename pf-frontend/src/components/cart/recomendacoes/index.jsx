import React from "react";
import "./style.css";

export default function Recomendacoes() {
    return (
        <div id="recomendacoes">
                <p id="title-recomendacoes">Recomendações:</p>

                <div id="container-recomendacoes">

                <div className="recomendacao">
                    <img className="recomendacao-img" src="../../../../public/img/cart/" alt="Recomendação 1"></img>
                    <div className="nota">
                        <p className="nota-p">4.9</p>
                        <img src="../../../../public/img/cart/star.png" alt="Estrela" />
                    </div>
                    <p className="recomendacao-p"></p>
                    <p className="recomendacao-preco"></p>
                    <button className="recomendacao-b"><img src="../../../../public/img/menu/carrinho.png" alt="Botão carrinho" /></button> 
                    <button className="recomendacao-b"><img src="../../../../public/img/menu/favs.png" alt="Botão Favoritos" /></button> 
                </div>

                </div>
                
        </div>
    );
}
  