// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const variants = {
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  closed: { y: 50, opacity: 0 },
  open: { y: 0, opacity: 1 },
};

export default function Links() {
  const items = ["Homepage", "Services", "Portfolio", "Contact"];
  return (
    <motion.div variants={variants} className="links">
      {items.map((item) => (
        <motion.a variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.9}} href={`#${item}`} key={item}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}
