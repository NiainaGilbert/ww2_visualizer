"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function CarouselReact({ items }) {
  const [index, setIndex] = useState(0);
  const total = items.length;

  // Auto-slide
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 7000);

    return () => clearInterval(id);
  }, [total]);

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <div className="carousel">
      <div className="desc_list">
        {items.map((item, i) => (
          <div className={`item ${i === index ? "active" : ""}`} key={i}>
            <Image src={item.image} alt="" />
            <div className="desc">
              <div className="theme">World War 2</div>
              <div className="title">{item.title}</div>
              <p className="description">{item.description}</p>

              <div className="Buttons">
                <button onClick={() => item.onAnalyse()}>Analyse</button>
                <button onClick={() => item.onMore()}>See more</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button onClick={prev}> {"<"} </button>
        <button onClick={next}> {">"} </button>
      </div>
    </div>
  );
}
