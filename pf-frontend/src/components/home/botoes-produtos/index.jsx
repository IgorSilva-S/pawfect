import React from "react";
import "./style.css";

export default function Home() {
    return (
        <div>
            <div id="botoes-produtos">
                <div>
                    <button className="botao-produto"><img src="../../../../public/img/animais-produtos/produtos-gatos.png" alt="Produtos para Gatos" /></button> 
                    <p className="texto-bp">Produtos para Gatos</p>
                </div>
                <div>
                    <button className="botao-produto"><img src="../../../../public/img/animais-produtos/produtos-caes.png" alt="Produtos para Cães" /></button> 
                    <p className="texto-bp">Produtos para Cães</p>
                </div>
                <div>
                    <button className="botao-produto"><img src="../../../../public/img/animais-produtos/produtos-passaros.png" alt="Produtos para Passáros" /></button> 
                    <p className="texto-bp">Produtos para Pássaros</p>
                </div>
                <div>
                    <button className="botao-produto"><img src="../../../../public/img/animais-produtos/produtos-roedores.png" alt="Produtos para Roedores" /></button> 
                    <p className="texto-bp">Produtos para Roedores</p>
                </div>
                <div>
                    <button className="botao-produto"><img src="../../../../public/img/animais-produtos/produtos-peixes.png" alt="Produtos para Peixes" /></button> 
                    <p className="texto-bp">Produtos para Peixes</p>
                </div>
            </div>
        </div>
         
    ) 
}    