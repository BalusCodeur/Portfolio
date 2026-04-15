"use client";

import ReviewCard from "./ReviewCard";

import { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    title: "Mon petit chou !",
    description: "C'est vraiment le meilleur lui !!!",
    image: "/images/poco.png",
    author: "Maman",
    note: 5,
  },
  {
    id: 2,
    title: "Miserable personne",
    description: "Someone help this dude",
    image: "/images/poco.png",
    author: "Maman",
    note: 0,
  },
  {
    id: 3,
    title: "Un vrai crack leeetsgoooo",
    description: "Allez ca c'est bien optimise",
    image: "/images/poco.png",
    author: "Fishou",
    note: 5,
  },
  {
    id: 4,
    title: "Projet 1",
    description: "Description courte",
    image: "/images/poco.png",
    author: "Maman",
    note: 5,
  },
];

function ArrowLeft() {
  return (
    <div className="w-4 h-4 relative">
      <ChevronLeft className="hover:scale-200" />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="w-4 h-4 relative">
      <ChevronRight className="hover:scale-200" />
    </div>
  );
}

export default function ReviewSection() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      { x: "-20px", opacity: 0 },
      { x: "0px", opacity: 1, duration: 0.4, ease: "power2.out" }
    );
  }, [index]);

  const length = reviews.length;

  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);

  const leftIndex = (index - 1 + length) % length;
  const rightIndex = (index + 1) % length;

  return (
    <div className="relative w-full flex items-center justify-center m-4 py-10">
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-4"
      >
        <ArrowLeft />
      </button>

      <div className="flex items-center justify-center gap-6 relative w-[600px] h-[300px]">
        {reviews.map((item, i) => {
          if (i === index) {
            return (
              <ReviewCard
                {...item}
                key={item.id}
                active={i === index}
                position="center"
              />
            );
          }
          if (i === leftIndex) {
            return (
              <ReviewCard
                {...item}
                key={item.id}
                active={i === index}
                position="left"
              />
            );
          }
          if (i === rightIndex) {
            return (
              <ReviewCard
                {...item}
                key={item.id}
                active={i === index}
                position="right"
              />
            );
          }
          return null; //  TOUTES LES AUTRES SONT INVISIBLES
        })}
      </div>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-4"
      >
        <ArrowRight />
      </button>
    </div>
  );
}
