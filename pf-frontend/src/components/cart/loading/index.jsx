import React, { use } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Lcart() {
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

                const cartRes = await fetch(`http://localhost:3000/api/cart/list/user/${user.email}`);
                let jsonCart
                try {
                    jsonCart = await cartRes.json()
                } catch {
                    navigate('/cart/vazio')
                    return
                }
                console.log(jsonCart.cart)
                if (jsonCart.cart.length <= 0) {
                    navigate('/cart/vazio')
                } else {
                    navigate('/cart/cheio')
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

            <h1>Carregando carrinho...</h1>
        </div>
    );
}
