import React from "react";
import "./style.css";
import Botoes from "../home/botoes";
import BotoesProdutos from "../home/botoes-produtos";
import Fidelidade from "../home/plano-fidelidade";
import Blog from "../home/blog";

export default function Home() {
    return (
            <>
                <Botoes />
                <BotoesProdutos />
                <Fidelidade />
                <Blog />
            </>
    )
}      