"use client";

// Utilise l'animation sur chaque element du children avec le classname .experience-card

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function ExperiencesFadeIn({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const cards = ref.current.querySelectorAll(".experience-card");

    gsap.from(cards, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return <div ref={ref}>{children}</div>;
}
