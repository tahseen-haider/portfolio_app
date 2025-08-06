import { useEffect, useState } from "react";
import "./cursor.scss";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 10 });
  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div className="cursor">
      <motion.div
        className="cursorCircleBig"
        transition={{ type: "spring", stiffness:300, damping: 20 }}
        animate={{
          x: position.x + 7,
          y: position.y + 7,
        }}
      />
      <motion.div
        className="cursorCircleSmall"
        transition={{ type: "spring", stiffness:60, damping: 15 }}
        animate={{
          x: position.x + 20,
          y: position.y + 20,
        }}
      />
    </div>
  );
}
