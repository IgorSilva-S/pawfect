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
                <p class="subtitle-footer">Redes Sociais</p>
                <div className="sociais">
                    <img className="img-footer" src="../../../public/img/footer/insta.png" alt="Instagram" />
                    <img className="img-footer" src="../../../public/img/footer/facebook.png" alt="facebook" />
                    <img className="img-footer" src="../../../public/img/footer/x.png" alt="X" />
                    <img className="img-footer" src="../../../public/img/footer/youtube.png" alt="Youtube" />
                </div>
            </div>
            <div className="other-area1"  style={{gridArea: "simple-2"}}>
                <p class="subtitle-footer">Formas de pagamento</p>
                <img id="payments-img" src="../../../public/img/footer/payments.png" alt="Pagamento" />
            </div>
            <div className="other-area2" style={{gridArea: "simple-3"}}>
                <p class="subtitle-footer">Políticas</p>
                <div className="links-footer">
                    <a href="/footer/aviso-privacidade">
                        <p>Aviso de privacidade</p>
                    </a>
                    <a href="/footer/cookies">
                        <p>Política de Cookies</p>
                    </a>
                    <a href="/footer/entrega-devolucao">
                        <p>Política de entrega e devolução</p>
                    </a>
                    <a href="/footer-poliica-compra">
                        <p>Política de compra</p>
                    </a>
                </div>
            </div>
            <div className="other-area2" style={{gridArea: "simple-4"}}>
                <p class="subtitle-footer">Atendimento</p> 
                <div className="links-footer">
                    <a href="/footer/central">
                        <p>Central de atendimento</p>
                    </a>
                    <a href="/footer-imprensa">
                        <p>Assessoria de imprensa</p>
                    </a>
                </div>
            </div>
        </footer>
    )
}  