import React from "react";
import './style.css'

export default function Footer() {
    return (
        <footer>
            <div className="bigArea" textStyle="subtitle">
                <p textStyle="title" textWeight="semibold">Conheça mais sobre a pawfect!</p>
                <br />
                Pawfect é um pet shop apaixonado por animais, oferecendo produtos e serviços de alta qualidade para garantir o bem-estar e felicidade dos pets. Com atendimento personalizado e um cuidado especial, somos a escolha perfeita para mimar seu melhor amigo.
            </div>
            <div style={{gridArea: "simple-1"}}>
                <p textWeight="semibold" textStyle="subtitle">Redes Sociais</p>
            </div>
            <div style={{gridArea: "simple-2"}}>
                <p textWeight="semibold" textStyle="subtitle">Formas de pagamento</p>
            </div>
            <div style={{gridArea: "simple-3"}}>
                <p textWeight="semibold" textStyle="subtitle">Políticas</p>
            </div>
            <div style={{gridArea: "simple-4"}}>
                <p textWeight="semibold" textStyle="subtitle">Atendimento</p> 
            </div>
        </footer>
    )
}