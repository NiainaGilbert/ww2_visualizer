"use client";

//iMAGE
import Image from "next/image";
import aircraft from "@/public/images/aircraft.png";
import vehicle from "@/public/images/vehicles.png";
import facility from "@/public/images/facility.png";
import weapon from "@/public/images/weapon.png";
import book from "@/public/images/book.png";
import event from "@/public/images/event.png";
import ship from "@/public/images/ships.png";
//
import "./mine.css";
import { useEffect } from "react";

export default function Home() {

    useEffect(() => {
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

            if (type === "next") 
            {
                SliderDom.appendChild(SliderItemsDom[0]);
                thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
                carouselDom.classList.add("next");
            } 
            else 
              {
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

    return (<div>
    <header>
        <nav>
            <a href="_">home</a>
            <a href="_">About</a>
        </nav>
    </header>
    <div className="carousel">
        <div className="desc_list">
            <div className="item">
                <Image src={aircraft} alt="Image1"/>
                <div className="desc">
                    <div className="theme">World War 2  </div>
                    <div className="title">Aircraft</div>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eum officiis cumque repellendus eligendi eos magnam ab adipisci laborum ipsum blanditiis itaque cum, consequuntur unde, vitae sit non, voluptatem consectetur!</p>
                </div>
                <div className="Buttons">
                    <button>Analyse</button>
                    <button>See more</button>
                </div>
            </div>
            <div className="item">
                <Image src={vehicle} alt="Image1"/>
                <div className="desc">
                    <div className="theme">World War 2  </div>
                    <div className="title">Vehicles</div>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eum officiis cumque repellendus eligendi eos magnam ab adipisci laborum ipsum blanditiis itaque cum, consequuntur unde, vitae sit non, voluptatem consectetur!</p>
                </div>
                <div className="Buttons">
                    <button>Analyse</button>
                    <button>See more</button>
                </div>
            </div>
            <div className="item">
                <Image src={facility} alt="Image1"/>
                <div className="desc">
                    <div className="theme">World War 2  </div>
                    <div className="title">Facilities</div>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eum officiis cumque repellendus eligendi eos magnam ab adipisci laborum ipsum blanditiis itaque cum, consequuntur unde, vitae sit non, voluptatem consectetur!</p>
                </div>
                <div className="Buttons">
                    <button>Analyse</button>
                    <button>See more</button>
                </div>
            </div>
            <div className="item">
                <Image src={weapon} alt="Image1"/>
                <div className="desc">
                    <div className="theme">World War 2  </div>
                    <div className="title">Weapons</div>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eum officiis cumque repellendus eligendi eos magnam ab adipisci laborum ipsum blanditiis itaque cum, consequuntur unde, vitae sit non, voluptatem consectetur!</p>
                </div>
                <div className="Buttons">
                    <button>Analyse</button>
                    <button>See more</button>
                </div>
            </div>
              <div className="item">
                <Image src={ship} alt="Image1"/>
                <div className="desc">
                    <div className="theme">World War 2  </div>
                    <div className="title">Ships</div>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eum officiis cumque repellendus eligendi eos magnam ab adipisci laborum ipsum blanditiis itaque cum, consequuntur unde, vitae sit non, voluptatem consectetur!</p>
                </div>
                <div className="Buttons">
                    <button>Analyse</button>
                    <button>See more</button>
                </div>
            </div>
        </div>
        <div className="thumbnail">
            <div className="item">
                <Image src={aircraft} alt="Image1"/>
                <div className="desc">
                    <div className="theme">Aircraft</div>
                    <div className="description">description</div>
                </div>
            </div>
            <div className="item">
                <Image src={vehicle} alt="Image1"/>
                <div className="desc">
                    <div className="theme">Vehicles</div>
                    <div className="description">description</div>
                </div>
            </div>
            <div className="item">
                <Image src={facility} alt="Image1"/>
                <div className="desc">
                    <div className="theme">Facilities</div>
                    <div className="description">description</div>
                </div>
            </div>
            <div className="item">
                <Image src={weapon} alt=""/>
                <div className="desc">
                    <div className="theme">Weapons</div>
                    <div className="description">description</div>
                </div>
            </div>
            <div className="item">
                <Image src={ship} alt=""/>
                <div className="desc">
                    <div className="theme">Ships</div>
                    <div className="description">description</div>
                </div>
            </div>
        </div>
        <div className="arrows">
            <button id="prev">{"<"}</button>
            <button id="next">{">"}</button>
            <div className="time"></div>
        </div>
    </div>
  </div>
    );
}
