import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

type Props = {
  children: React.ReactNode;
  backgroundColor: string;
  direction: string;
  left: string;
};

const calc = (x: number, y: number): [number, number, number] => [
  -(y - window.innerHeight / 2) / 100,
  (x - window.innerWidth / 2) / 100,
  1.02,
];

const trans = (x: number, y: number, s: number): string =>
  `perspective(900px) rotateX(${-x}deg) rotateY(${-y}deg)`;

const HoverCard: React.FC<Props> = ({
  children,
  backgroundColor,
  direction,
  left,
}) => {
  const [hovered, setIsHovered] = useState(false);
  const [springProps, setSpringProps] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const [cursorCoords, setCursorCoords] = useState({ x: 0, y: 0 });
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleMousePosition = (event: MouseEvent) => {
      const { clientX: x, clientY: y } = event;
      setCursorCoords({ x, y });
    };

    window.addEventListener("mousemove", handleMousePosition);

    setTranslateX(
      calcTranslate(window.innerWidth / 2, window.innerWidth, 1400)
    );
    setTranslateY(
      calcTranslate(window.innerHeight / 2, window.innerHeight, 600)
    );

    return () => {
      window.removeEventListener("mousemove", handleMousePosition);
    };
  }, []);

  useEffect(() => {
    setTranslateX(calcTranslate(cursorCoords.x, window.innerWidth, 1400));
    setTranslateY(calcTranslate(cursorCoords.y, window.innerHeight, 600));
  }, [cursorCoords]);

  const calcTranslate = (
    coordinate: number,
    containerSize: number,
    itemSize: number
  ) => coordinate - itemSize / 2;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX: x, clientY: y } = event;
    setSpringProps({ xys: calc(x, y) });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setSpringProps({ xys: [0, 0, 1] });
    setIsHovered(false);
  };

  return (
    <animated.div
      className="overflow-hidden  mb-3 md:mb-8 rounded-xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: springProps.xys.to(trans) }}
    >
      <div
        className={`z-[1] relative bg-border h-full border-secondary border-[0.5px] rounded-xl shadow-xl md:flex ${direction} justify-between`}
      >
        {children}
        <div
          className={`absolute w-[500px] border-none ${backgroundColor} bottom-[50px] h-[500px] z-[-1] blur-3xl ${
            hovered ? "opacity-45" : "opacity-0"
          } `}
          style={{
            transform: `translateX(${translateX}px) translateY(${translateY}px)`,
            borderRadius: "100%",
            mixBlendMode: "soft-light",
            left: left,
            willChange: "transform",
            transition: "transform 0.2s cubic-bezier",
          }}
        ></div>
      </div>
    </animated.div>
  );
};

export default HoverCard;
