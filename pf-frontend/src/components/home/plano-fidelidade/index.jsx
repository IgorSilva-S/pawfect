import React from "react";
import "./style.css";

export default function Fidelidade() {
    return (
        <div id="container-fidelidade">
            <p id="titulo-fidelidade">Planos Fidelidade</p>

            <div id="containers-plano">
              <div className="planos-fidelidade">
                <p className="titulo-pf">Pawfect Básico</p>
                <p className="preco-pf">R$29,90/mês</p>
                <button className="button-pf">Conferir cobertura</button>
                <a className="assinar-pf">Assinar</a>
              </div>

              <div className="planos-fidelidade">
                <p className="titulo-pf">Pawfect Premium</p>
                <p className="preco-pf">R$49,90/mês</p>
                <button className="button-pf">Conferir cobertura</button>
                <a className="assinar-pf">Assinar</a>
              </div>

              <div className="planos-fidelidade">
                <p className="titulo-pf">Pawfect Família</p>
                <p className="preco-pf">R$69,90/mês</p>
                <button className="button-pf">Conferir cobertura</button>
                <a className="assinar-pf">Assinar</a>
              </div>
            </div>
        </div>
         
    ) 
}    