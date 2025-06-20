import React from "react";
import "./style.css";
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <div id="botoes-home">
                <Link to="/cupons">
                    <button className="botao-home">Cupons te esperando!</button> 
                </Link>
                <div className="div-home">Frete Grátis!*</div> 
                <div className="div-home">Até 3x sem juros!</div> 
            </div>
        </div>
        
    )
}     