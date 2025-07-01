import React from "react";
import "./carousel.css";
import { act } from "react";

const carouselNum = 3
let actualCarousel = 2
let prvCarousel = 1
let nxtCarousel = 3
let autoChangeCarousel = true

export default function Carousel() {
    function backCarousel() {
        if (actualCarousel == 1) {
            actualCarousel = 5
            nxtCarousel = 1
            prvCarousel = 4
        } else {
            nxtCarousel = actualCarousel
            prvCarousel = actualCarousel - 2
            if (prvCarousel < 1) {
                prvCarousel = 5
            }
            actualCarousel--
        }

        document.querySelectorAll('[carouselBanner]').forEach((i) => {
            i.style.opacity = '0'
            setTimeout(() => {
                i.classList.remove('carouselLeft')
                i.classList.remove('carouselMid')
                i.classList.remove('carouselRight')
                i.removeAttribute('style')

                document.getElementById(`carousel${prvCarousel}`).classList.add('carouselLeft')
                document.getElementById(`carousel${actualCarousel}`).classList.add('carouselMid')
                document.getElementById(`carousel${nxtCarousel}`).classList.add('carouselRight')
            }, 300);
        })
    }

    function nextCarousel() {
        if (actualCarousel == 5) {
            actualCarousel = 1
            prvCarousel = 5
            nxtCarousel = 2
        } else {
            prvCarousel = actualCarousel
            nxtCarousel = actualCarousel + 2
            if (nxtCarousel > 5) {
                nxtCarousel = 1
            }
            actualCarousel++
        }

        document.querySelectorAll('[carouselBanner]').forEach((i) => {
            i.style.opacity = '0'
            setTimeout(() => {
                i.classList.remove('carouselLeft')
                i.classList.remove('carouselMid')
                i.classList.remove('carouselRight')
                i.removeAttribute('style')

                document.getElementById(`carousel${prvCarousel}`).classList.add('carouselLeft')
                document.getElementById(`carousel${actualCarousel}`).classList.add('carouselMid')
                document.getElementById(`carousel${nxtCarousel}`).classList.add('carouselRight')
            }, 300);
        })

    }

    return (
        <div className="carousel">
            <div className="carouselLeftCl"></div>
            <div className="carouselMidCl">
                                <div className="cloadingSpin"></div>
            </div>
            <div className="carouselRightCl"></div>
            <div className="carouselLeft" id="carousel1" carouselBanner='true'></div>
            <div className="carouselMid" id="carousel2" carouselBanner='true'></div>
            <div className="carouselRight" id="carousel3" carouselBanner='true'></div>
            <div id="carousel4" carouselBanner='true'></div>
            <div id="carousel5" carouselBanner='true'></div>

            <button className="cControls nxt" onClick={nextCarousel}><img src="../../../../public/img/banners-carrossel/setanxt.png" alt="seta" /></button>
            <button className="cControls prv" onClick={backCarousel}><img src="../../../../public/img/banners-carrossel/setaprv.png" alt="seta" /></button>
        </div>
    )
}
