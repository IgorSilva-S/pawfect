import React from "react";
import "./style.css";
import Botoes from "../home/botoes";
import BotoesProdutos from "../home/botoes-produtos";
import Fidelidade from "../home/plano-fidelidade";
import Blog from "../home/blog";
import Carousel from "./carousel";

export default function Home() {
    return (
            <>
                <Carousel />
                <Botoes />
                <BotoesProdutos />
                <Fidelidade />
                <Blog />
            </>
    )
}       