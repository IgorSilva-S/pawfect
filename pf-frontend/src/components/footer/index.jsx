import React from "react";
import './style.css'

export default function Footer() {
    return (
        <footer>
            <div className="bigArea" textStyle="subtitle">
                <p textStyle="title" id="title-footer">Conheça mais sobre a pawfect!</p>
                <br />
                Pawfect é um pet shop apaixonado por animais, oferecendo produtos e serviços de alta qualidade para garantir o bem-estar e felicidade dos pets. Com atendimento personalizado e um cuidado especial, somos a escolha perfeita para mimar seu melhor amigo.
            </div>
            <div className="other-area1" style={{gridArea: "simple-1"}}>
                <p textStyle="subtitle">Redes Sociais</p>
                <div className="sociais">
                    <img className="img-footer" src="../../../public/img/footer/insta.png" alt="Instagram" />
                    <img className="img-footer" src="../../../public/img/footer/facebook.png" alt="facebook" />
                    <img className="img-footer" src="../../../public/img/footer/x.png" alt="X" />
                    <img className="img-footer" src="../../../public/img/footer/youtube.png" alt="Youtube" />
                </div>
            </div>
            <div className="other-area1"  style={{gridArea: "simple-2"}}>
                <p textStyle="subtitle">Formas de pagamento</p>
                <img src="../../../public/img/footer/payments.png" alt="Pagamento" />
            </div>
            <div className="other-area2" style={{gridArea: "simple-3"}}>
                <p textStyle="subtitle">Políticas</p>
            </div>
            <div className="other-area2" style={{gridArea: "simple-4"}}>
                <p textStyle="subtitle">Atendimento</p> 
            </div>
        </footer>
    )
}  