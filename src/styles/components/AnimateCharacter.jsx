import { useAnimation } from "framer-motion";
import { useCallback } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function AnimatedChar({ char, wordIndex, charIndex }) {
  const controls = useAnimation();

  const handleHover = useCallback(() => {
    controls.start({
      scale: [1, 1.25, 0.75, 1.15, 0.85, 0.95, 1.05, 1],
      transition: {
        duration: 1,
        times: [0, 0.3, 0.4, 0.5, 0.65, 0.75, 0.9, 1],
      },
    });
  }, [controls]);

  return (
    <motion.span
      onHoverStart={handleHover}
      animate={controls}
      whileHover={{ color: "#ffa500" }}
      whileTap={{ scale: 0.5 }}
      key={`char-${wordIndex}-${charIndex}`}
      style={{ display: "inline-block", whiteSpace: "pre", cursor: "pointer", userSelect: "none" }}
    >
      {char}
    </motion.span>
  );
}
