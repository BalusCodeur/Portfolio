"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function CarouselGSAP() {
  const [index, setIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([null]);

  const items = [
    { id: 1, title: "Projet 1" },
    { id: 2, title: "Projet 2" },
    { id: 3, title: "Projet 3" },
    { id: 4, title: "Projet 4" },
    { id: 5, title: "Projet 5" },
  ];

  const length = items.length;

  const prev = () => setIndex((i) => (i - 1 + length) % length);
  const next = () => setIndex((i) => (i + 1) % length);

  const leftIndex = (index - 1 + length) % length;
  const rightIndex = (index + 1) % length;

  // ANIMATION GSAP
  useGSAP(
    () => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        if (i === index) {
          // CENTER
          gsap.to(card, {
            x: 0,
            scale: 1.15,
            opacity: 1,
            zIndex: 20,
            duration: 0.5,
            ease: "power3.out",
            rotateY: 0,
          });
        } else if (i === leftIndex) {
          // LEFT
          gsap.to(card, {
            x: -250,
            scale: 0.8,
            opacity: 0.6,
            zIndex: 10,
            duration: 0.5,
            ease: "power3.out",
            rotateY: 15,
          });
        } else if (i === rightIndex) {
          // RIGHT
          gsap.to(card, {
            x: 250,
            scale: 0.8,
            opacity: 0.6,
            zIndex: 10,
            duration: 0.5,
            ease: "power3.out",
            rotateY: -15,
          });
        } else {
          // INVISIBLE
          gsap.to(card, {
            opacity: 0,
            scale: 0.5,
            x: 0,
            zIndex: 0,
            duration: 0.4,
            ease: "power3.out",
          });
        }
      });
    },
    { dependencies: [index] }
  );

  return (
    <div className="relative w-full flex items-center justify-center py-10">
      {/* BOUTON GAUCHE */}
      <button
        onClick={prev}
        className="absolute left-10 top-1/2 -translate-y-1/2 z-50 p-4"
      >
        ◀
      </button>

      {/* CONTAINER */}
      <div className="relative w-[600px] h-[300px] flex items-center justify-center">
        {items.map((item, i) => (
          <div
            key={item.id}
            ref={(el) => (cardRefs.current[i] = el)}
            className="absolute bg-zinc-800 text-white px-10 py-14 rounded-2xl shadow-xl"
            style={{
              opacity: 0,
            }}
          >
            <h2 className="text-xl font-bold">{item.title}</h2>
          </div>
        ))}
      </div>

      {/* BOUTON DROIT */}
      <button
        onClick={next}
        className="absolute right-10 top-1/2 -translate-y-1/2 z-50 p-4"
      >
        ▶
      </button>
    </div>
  );
}
