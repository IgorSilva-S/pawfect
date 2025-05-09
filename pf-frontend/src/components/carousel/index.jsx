import React from "react";
import "./carousel.css";

const carouselNum = 3
let actualCarousel = 1
let lastCarousel = 3
let autoChangeCarousel = true

export default function Carousel() {
    function backCarousel() {
        if (actualCarousel == 1) {
            actualCarousel = 3
            lastCarousel = 1
        } else {
            lastCarousel = actualCarousel
            actualCarousel--
        }


    }

    return (
        <div className="carousel">
            <div className="carouselLeft" id="carousel1"></div>
            <div className="carouselMid" id="carousel2"></div>
            <div className="carouselRight" id="carousel3"></div>
            <div className="outsideCarousel" id="carousel4"></div>
            <div className="outsideCarousel" id="carousel5"></div>

            <button className="cControls nxt">NTX</button>
            <button className="cControls prv">PRV</button>
        </div>
    )
}
