import React from "react";
import "./style.css";
import { Link, useNavigate } from 'react-router-dom'

export default function TitleBar() {
    return (
        <div className="titleBar">
            <div className="lgEffect"></div>
            <svg>
                <filter id="glassD">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.01 0.01"
                        numOctaves="1"
                        seed="7"
                        result="turbulence"
                    />
                    <feGaussianBlur
                        in="turbulence"
                        stdDeviation="3"
                        result="softMap"
                    />
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="softMap"
                        scale="150"
                    />
                </filter>
            </svg>
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