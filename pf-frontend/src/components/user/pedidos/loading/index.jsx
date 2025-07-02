import React, { use } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Lpedidos() {
    const navigate = useNavigate()

    useEffect(() => {
        const ftokenVer = async () => {
            try {
                const token = localStorage.getItem('token');
                const tokenRes = await fetch('http://localhost:3000/api/user/profile/', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `bearer ${token}`
                    }
                });

                if (!tokenRes.ok) {
                    navigate('/user');
                    return;
                }

                const { user } = await tokenRes.json();

                const transRes = await fetch(`http://localhost:3000/api/transaction/list/user/${user.email}`);
                const jsonCart = await transRes.json()
                console.log(jsonCart.transaction)
                if (jsonCart.transaction.length <= 0) {
                    navigate('/pedidos/vazio')
                } else {
                    navigate('/pedidos/cheio')
                }
            } catch (err) {
                console.error(`Tivemos um probleminha aqui 🫠: ${err.message}`)
            }

        }

        ftokenVer()

    })

    return (
        <div className="cartLoad">

            <div className="loadingSpin"></div>

            <h1>Carregando pedidos...</h1>
        </div>
    );
}
