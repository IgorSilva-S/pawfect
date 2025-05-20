import React from "react";
import "./style.css";
import Recomendacoes from "../cart/recomendacoes";
import Vazio from "../cart/vazio";

export default function Cart() {
    return (
        <div className="cart">
            <>
                <Vazio />
                <Recomendacoes />
            </>
        </div>
    );
}
 