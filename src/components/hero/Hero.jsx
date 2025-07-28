import "./hero.scss";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    y: 0,
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-260%",
    opacity: 1,
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "linear",
    },
  },
};

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="textContainer"
        >
          <motion.h2 variants={textVariants}>TAHSEEN HAIDER</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and UI designer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See my Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            onClick={() => {
              document
                .getElementById("Services")
                .scrollIntoView({ behavior: "smooth" });
            }}
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="image"
          />
        </motion.div>
        <motion.div
          variants={sliderVariants}
          animate="animate"
          initial="initial"
          className="slidingTextContainer"
        >
          NEXT.js MERN TYPESCRIPT React.js
        </motion.div>
        <div className="imageContainer">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
            className="main-image"
            src="/heroo.webp"
            alt="hero-image"
          />
        </div>
      </div>
    </div>
  );
}
