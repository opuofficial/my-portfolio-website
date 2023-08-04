import React, { useState, useEffect } from "react";
import "./customCursor.css";

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom__cursor"
      style={{ left: cursorPos.x, top: cursorPos.y }}
    />
  );
};

export default CustomCursor;
