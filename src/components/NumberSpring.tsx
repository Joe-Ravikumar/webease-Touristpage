"use client";
import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

interface NumberSpringProps {
  n: number;
  className?: string;
}

const NumberSpring: React.FC<NumberSpringProps> = ({ n, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const props = useSpring({
    from: { number: 0 },
    to: { number: isVisible ? n : 0 },
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <animated.div ref={ref} className={className}>
      {props.number.to((n) => n.toFixed(0))}
    </animated.div>
  );
};

export default NumberSpring;
