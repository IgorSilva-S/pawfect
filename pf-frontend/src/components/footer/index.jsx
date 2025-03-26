import React from "react";
import './style.css'

export default function Footer() {
    return (
        <footer>
            <div className="bigArea">
                <p className="semiTitle"></p>
            </div>
            <div style={{gridArea: "simple-1"}}>Redes Sociais</div>
            <div style={{gridArea: "simple-2"}}>Formas de pagamento</div>
            <div style={{gridArea: "simple-3"}}>Politicas</div>
            <div style={{gridArea: "simple-4"}}>Atendimento</div>
        </footer>
    )
}