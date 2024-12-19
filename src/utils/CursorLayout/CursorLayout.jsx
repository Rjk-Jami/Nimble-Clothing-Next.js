"use client";
import React, { useEffect, useRef } from "react";

const Cursor_layout = () => {
  const circlesRef = useRef([]);
  const coords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const colors = ["rgb(255, 123, 0,0.3)"];
    const circles = circlesRef.current;

    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e) => {
      coords.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.forEach((circle, index) => {
        circle.style.left = `${x - 20}px`;
        circle.style.top = `${y - 20}px`;
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.1;
        y += (nextCircle.y - y) * 0.1;

        circle.x = x;
        circle.y = y;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {Array.from({ length: 2 }).map((_, index) => (
        <div
          key={index}
          className={`circle ${index === 0 ? 'border-2 border-black/20' : ''}`}
          ref={(el) => (circlesRef.current[index] = el)}
        ></div>
      ))}
    </>
  );
};

export default Cursor_layout;
