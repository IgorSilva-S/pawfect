import React from "react";
import './style.css'
import { Link } from 'react-router-dom';
 
export default function Footer() {
    return (
        <footer>
            <div className="bigArea">
                <p className="title-footer" id="title-footer">Conheça mais sobre a pawfect!</p>
                <br />
                Pawfect é um pet shop apaixonado por animais, oferecendo produtos e serviços de alta qualidade para garantir o bem-estar e felicidade dos pets. Com atendimento personalizado e um cuidado especial, somos a escolha perfeita para mimar seu melhor amigo.
            </div>
          
            <div className="other-area1" style={{gridArea: "simple-1"}}>
                <p className="subtitle-footer">Redes Sociais</p>
                <div className="sociais">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img className="img-footer" src="/img/footer/insta.png" alt="Instagram" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img className="img-footer" src="/img/footer/facebook.png" alt="Facebook" />
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                        <img className="img-footer" src="/img/footer/x.png" alt="X" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <img className="img-footer" src="/img/footer/youtube.png" alt="Youtube" />
                    </a>
                </div>
            </div>
            <div className="other-area1" style={{gridArea: "simple-2"}}>
                <p className="subtitle-footer">Formas de pagamento</p>
                <img id="payments-img" src="/img/footer/payments.png" alt="Pagamento" />
            </div>
            <div className="other-area2" style={{gridArea: "simple-3"}}>
                <p className="subtitle-footer">Políticas</p>
                <div className="links-footer">
                    <Link to="/footer/aviso-privacidade">
                        <p>Aviso de privacidade</p>
                    </Link>
                    <Link to="/footer/cookies">
                        <p>Política de Cookies</p>
                    </Link>
                    <Link to="/footer/entrega-devolucao">
                        <p>Política de entrega e devolução</p>
                    </Link>
                    <Link to="/footer/poliica-compra">
                        <p>Política de compra</p>
                    </Link>
                </div>
            </div>
            <div className="other-area2" style={{gridArea: "simple-4"}}>
                <p className="subtitle-footer">Atendimento</p> 
                <div className="links-footer">
                    <a href="#">
                        <p>Central de atendimento</p>
                    </a>
                    <a href="#">
                        <p>Assessoria de imprensa</p>
                    </a>
                </div>
            </div>
        </footer>
    )
}  