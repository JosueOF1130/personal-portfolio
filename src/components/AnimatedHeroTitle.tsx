import type { ReactElement } from "react";


export default function AnimatedHeroTitle(): ReactElement {
    const text = "Web Developer";
  const letters = text.split("");

  const colors = [
    "#7C3AED",
    "#06B6D4",
    "#F43F5E",
    "#F59E0B",
  ];

  const stepDuration = 0.4;
  const totalDuration = letters.length * stepDuration;

  return (
    <h2 className="traveling-title">
      {letters.map((letter, index) => (
        <span
          key={index}
          style={{
            animationDuration: `${totalDuration}s`,
            animationDelay: `${index * stepDuration}s`,
            "--accent-color": colors[index % colors.length],
          } as React.CSSProperties}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </h2>
  );
}