import { useEffect, useState } from "react";
import type { ReactElement } from "react";

export default function AnimatedHeroTitle(): ReactElement {
  const text = "Web Developer";
  const letters = text.split("");

  const hoverColors = [
    "#6BE4DF",
    "#767EE1",
    "#F75F66",
    "#F69DC8"
  ];

  const stepDuration = 400;

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [colors, setColors] = useState<string[]>(
    letters.map(() => "#FFFFFF")
  );

  function getRandomColor(): string {
    return hoverColors[Math.floor(Math.random() * hoverColors.length)];
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % letters.length;

        // Change color EXACTLY when it becomes active
        setColors(prevColors => {
          const updated = [...prevColors];
          updated[nextIndex] = getRandomColor();
          return updated;
        });

        return nextIndex;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="traveling-title">
      {letters.map((letter, index) => (
        <span
          key={index}
          className={index === activeIndex ? "jump" : ""}
          style={{ color: index === activeIndex ? colors[index] : "#E6EAF0" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </h2>
  );
}
  