import React from "react";
import "./style.css";
import Carousel from "../carousel";

export default function Home() {
    return (
        <section>
        <Carousel />
        <div id="botoes-home">
            <button className="botao-home">Cupons te esperando!</button> 
            <button className="botao-home">Frete Grátis!*</button> 
            <button className="botao-home">Até 3x sem juros!</button> 
        </div>
        </section>
    )
}