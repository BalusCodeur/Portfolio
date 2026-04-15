"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface FadeInProps {
  children: React.ReactNode;
}

export default function FadeIn({ children }: FadeInProps) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.from(ref.current, {
      opacity: 0,
      y: 100,
      duration: 2,
      ease: "power2.out",
    });
  }, []);

  return <div ref={ref}>{children}</div>;
}
