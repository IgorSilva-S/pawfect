import React from "react";
import "./style.css";
import { Link, useNavigate } from 'react-router-dom'

export default function TitleBar() {
    return (
        <div className="titleBar">
            <Link to="/">
                <div className="logo">

                </div>
            </Link>

            <div className="tbItems">
                <input type="search" name="" id="" />
                <Link to="/cart">
                    <button>Cart</button>
                </Link>
                <Link to="/liked">
                    <button>Liked</button>
                </Link>
                <Link to="/user">
                    <button>User</button>
                </Link>
            </div>
        </div>
    );
}