"use client";

import Image from "next/image";
import { useRef } from "react";
import irfanDesigner from "@/public/irfandesigner.png";

export function HeroPortrait() {
  const stageRef = useRef(null);
  const figureRef = useRef(null);
  const shineRef = useRef(null);
  const shadowRef = useRef(null);

  const reset = () => {
    if (figureRef.current) {
      figureRef.current.style.transform =
        "rotateX(8deg) rotateY(-14deg) translateZ(40px)";
    }
    if (shineRef.current) {
      shineRef.current.style.background =
        "radial-gradient(circle at 32% 22%, rgba(255,255,255,0.28), transparent 52%)";
    }
    if (shadowRef.current) {
      shadowRef.current.style.transform = "translateX(18px) translateY(28px) rotateX(70deg) scale(1)";
      shadowRef.current.style.opacity = "0.55";
    }
  };

  const onMove = (event) => {
    const stage = stageRef.current;
    const figure = figureRef.current;
    if (!stage || !figure) return;

    const rect = stage.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 28;
    const rotateX = (0.5 - py) * 18;

    figure.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(56px)`;

    if (shineRef.current) {
      shineRef.current.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.38), transparent 48%)`;
    }
    if (shadowRef.current) {
      const shiftX = (0.5 - px) * 40;
      const shiftY = 24 + py * 18;
      shadowRef.current.style.transform = `translateX(${shiftX}px) translateY(${shiftY}px) rotateX(70deg) scale(${1.05 - py * 0.08})`;
      shadowRef.current.style.opacity = String(0.4 + py * 0.25);
    }
  };

  return (
    <div
      ref={stageRef}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="hidden lg:block"
      style={{ perspective: "1400px" }}
    >
      <div className="hero-portrait-float relative h-[min(88vh,46rem)] w-[min(42vw,28rem)]">
        <div
          ref={shadowRef}
          className="pointer-events-none absolute bottom-6 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-[100%] bg-black blur-2xl"
          style={{
            transform: "translateX(18px) translateY(28px) rotateX(70deg)",
            opacity: 0.55,
            transformOrigin: "center",
          }}
        />
        <div
          ref={figureRef}
          className="relative h-full w-full transition-transform duration-150 ease-out will-change-transform"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(8deg) rotateY(-14deg) translateZ(40px)",
          }}
        >
          <Image
            src={irfanDesigner}
            alt="Irfan"
            priority
            className="relative h-full w-full object-contain object-bottom"
            style={{
              transform: "translateZ(24px)",
              filter:
                "drop-shadow(18px 28px 24px rgba(0,0,0,0.55)) contrast(1.08) saturate(1.12)",
            }}
          />
          <div
            ref={shineRef}
            className="pointer-events-none absolute inset-0 mix-blend-overlay"
            style={{
              transform: "translateZ(48px)",
              background:
                "radial-gradient(circle at 32% 22%, rgba(255,255,255,0.28), transparent 52%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              transform: "translateZ(32px)",
              background:
                "linear-gradient(115deg, rgba(255,255,255,0.08) 0%, transparent 42%, rgba(0,0,0,0.28) 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
