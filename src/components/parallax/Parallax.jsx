import { useRef } from "react";
import "./parallax.scss";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ type }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);

  return (
    <div
      ref={ref}
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d"
            : "linear-gradient(180deg, #111132, #505064",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <div className="mountains" />
      <motion.div style={{ y: yBg, backgroundImage: type==="services"?"url(/planets.png)":"url(/sun.png)" }} className="planets" />
      <motion.div style={{ x: yBg }} className="stars" />
    </div>
  );
}
