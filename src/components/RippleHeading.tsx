import { useState, type ReactElement } from "react";

export default function RippleHeading(): ReactElement {
    const text = "Josue Orozco";
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <h1 className="ripple-heading">
      {text.split("").map((letter, index) => {
        const distance =
          hoveredIndex === null ? null : Math.abs(index - hoveredIndex);

        let translateY = 0;

        if (distance !== null) {
          if (distance === 0) translateY = -12;
          else if (distance === 1) translateY = -8;
          else if (distance === 2) translateY = -4;
        }

        return (
          <span
            key={index}
            style={{
              transform: `translateY(${translateY}px)`,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        );
      })}
    </h1>
  );
}