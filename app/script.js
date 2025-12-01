"use client";

import { useEffect } from "react";

export default function Home() {

    useEffect(() => {
        // DOM dispo uniquement ici
        
        const nextDom = document.getElementById("next");
        const prevDom = document.getElementById("prev");

        const carouselDom = document.querySelector(".carousel");
        const SliderDom = carouselDom.querySelector(".carousel .desc_list");
        const thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
        const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
        const timeDom = document.querySelector(".carousel .time");

        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

        let timeRunning = 3000;
        let timeAutoNext = 7000;

        const showSlider = (type) => {
            const SliderItemsDom = SliderDom.querySelectorAll(".carousel .desc_list .item");
            const thumbnailItemsDom = document.querySelectorAll(".carousel .thumbnail .item");

            if (type === "next") {
                SliderDom.appendChild(SliderItemsDom[0]);
                thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
                carouselDom.classList.add("next");
            } else {
                SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
                thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                carouselDom.classList.add("prev");
            }

            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carouselDom.classList.remove("next");
                carouselDom.classList.remove("prev");
            }, timeRunning);

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                nextDom.click();
            }, timeAutoNext);
        };

        nextDom.onclick = () => showSlider("next");
        prevDom.onclick = () => showSlider("prev");

        let runTimeOut;
        let runNextAuto = setTimeout(() => nextDom.click(), timeAutoNext);

    }, []); // exécuté une seule fois au montage

    return (
        <div className="carousel">
            {/* ton HTML ici */}
        </div>
    );
}
