import { useRef } from "react";
import "./services.scss";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export default function Services() {
  const ref = useRef()
  const isInView = useInView(ref, {margin: "-100px"})

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
    </motion.div>
  );
}
