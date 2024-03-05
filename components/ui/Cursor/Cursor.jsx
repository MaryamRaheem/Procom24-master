"use client";
import { useEffect, useState } from "react";
import styles from "./cursor.module.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={styles.cursor}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    />
  );
};

export default Cursor;
