"use client";

import gsap from "gsap";

import { useEffect, useRef } from "react";

import {
  siReact,
  siNodedotjs,
  siFlutter,
  siDart,
  siTypescript,
  siToyota,
  siAndroid,
  siAndroidstudio,
  siC,
  siCplusplus,
  siDocker,
  siHuggingface,
  siJavascript,
  siKotlin,
  siPython,
  siTailwindcss,
} from "simple-icons";

const techIcons = [
  siReact,
  siNodedotjs,
  siFlutter,
  siDart,
  siTypescript,
  siToyota,
  siAndroid,
  siAndroidstudio,
  siC,
  siCplusplus,
  siDocker,
  siHuggingface,
  siJavascript,
  siKotlin,
  siPython,
  siTailwindcss,
];

function Icon({ icon, className }: { icon: any; className?: string }) {
  return (
    <svg
      className={className}
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor" // 👈 permet de colorer l’icône avec Tailwind
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={icon.path} />
    </svg>
  );
}

export default function BandeauTech() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const container = marqueeRef.current;
    const totalWidth = container.scrollWidth / 2; // car on répète les logos
    const speed = 100; // pixels par seconde

    tl.current = gsap.timeline({ repeat: -1, defaults: { ease: "linear" } });
    tl.current.to(container, { x: -totalWidth, duration: totalWidth / speed });

    return () => {
      tl.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    tl.current?.timeScale(0.3); // 30% vitesse
  };

  const handleMouseLeave = () => {
    tl.current?.timeScale(1); // vitesse normale
  };

  return (
    <div
      className="relative w-full overflow-hidden ml-6 py-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Fade gauche */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-linear-to-r from-[#0a0a0a] to-transparent z-10"></div>
      {/* Fade droite */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-linear-to-l from-[#0a0a0a] to-transparent z-10 "></div>

      {/* Marquee */}
      <div ref={marqueeRef} className="flex gap-10">
        {[...techIcons, ...techIcons].map((icon, i) => (
          <Icon
            key={i}
            icon={icon}
            className="w-16 h-16 text-green-400 shrink-0"
          />
        ))}
      </div>
    </div>
  );

  // return (
  //   <div className="overflow-hidden w-full bg-transparent py-6">
  //     <div className="flex gap-10 animate-[marquee_20s_linear_infinite] marquee-paused min-w-max">
  //       {techIcons.concat(techIcons).map((icon, i) => (
  //         <Icon
  //           key={i}
  //           icon={icon}
  //           className="w-16 h-16 text-green-400 shrink-0"
  //         />
  //       ))}
  //     </div>
  //   </div>
  // );
}
