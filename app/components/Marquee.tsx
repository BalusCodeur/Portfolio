//Code From Pragmattic

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { type FC, useMemo, useRef } from "react";
import { twJoin, twMerge } from "tailwind-merge";

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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={icon.path} />
    </svg>
  );
}

gsap.registerPlugin(useGSAP);

type Props = {
  isReversed?: boolean;
  className?: string;
};

const ELEMENTS = [...techIcons, ...techIcons];

const Marquee: FC<Props> = ({ isReversed = false, className }) => {
  const movingContainer = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline>(null);

  useGSAP(
    () => {
      const setupInfiniteMarqueeTimeline = () => {
        gsap.set(movingContainer.current, {
          xPercent: isReversed ? -50 : 0,
        });
        timeline.current = gsap
          .timeline({
            defaults: { ease: "none", repeat: 2 },
          })
          .to(movingContainer.current, {
            xPercent: isReversed ? 0 : -50,
            duration: 40,
          });
        // .set(movingContainer.current, { xPercent: 0 });
      };

      setupInfiniteMarqueeTimeline();
    },
    { dependencies: [isReversed] }
  );

  let timelineTimeScaleTween = useRef<GSAPTween>(null);

  const onPointerEnter = () => {
    if (!timeline.current) return;
    timelineTimeScaleTween.current?.kill();
    timelineTimeScaleTween.current = gsap.to(timeline.current, {
      timeScale: 0.25,
      duration: 0.4,
    });
  };

  const onPointerLeave = () => {
    if (!timeline.current) return;
    timelineTimeScaleTween.current?.kill();
    timelineTimeScaleTween.current = gsap.to(timeline.current, {
      timeScale: 1,
      duration: 0.2,
    });
  };

  const list = useMemo(
    () => (
      <div className="flex w-fit items-center gap-10">
        {ELEMENTS.map((src, index) => {
          const isLast = index === ELEMENTS.length - 1;
          return (
            <div
              key={index}
              className={twJoin(
                "relative flex shrink-0 items-center justify-center",
                isLast && "mr-10"
              )}
            >
              <Icon
                key={index}
                icon={src}
                className="w-16 h-16 text-green-400 shrink-0"
              />
            </div>
          );
        })}
      </div>
    ),
    []
  );

  return (
    <div
      className={twMerge("max-w-full select-none overflow-hidden", className)}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
      }}
    >
      <div ref={movingContainer} className="flex w-fit">
        {list}
        {list}
      </div>
    </div>
  );
};

export default Marquee;
