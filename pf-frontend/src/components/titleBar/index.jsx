import React from "react";
import "./style.css";
import { Link, useNavigate } from 'react-router-dom'

export default function TitleBar() {
    return (
        <div className="titleBar">
            <Link to="/">
                <div id="logo-menu"></div>
            </Link>

            <div className="tbItems">
                <input  type="search" id="search-bar" />
                <Link to="/cart/vazio">
                    <button id="cart"></button>
                </Link>
                <Link to="/liked">
                    <button id="liked"></button>
                </Link>
                <Link to="/user">
                    <button id="user"></button>
                </Link>
            </div>
        </div>
    );
} 