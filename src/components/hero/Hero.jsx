import "./hero.scss";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SplitText from "../../styles/components/SplitText";
import ParticlesContainer from "../../styles/components/ParticlesContainer";
import ReactIcon from "../icons/react";
import HTMLIcon from "../icons/html";
import CSSIcon from "../icons/css";
import NextIcon from "../icons/next";
import NodeIcon from "../icons/node";
import ExpressIcon from "../icons/express";
import JavascriptIcon from "../icons/javascript";
import TypescriptIcon from "../icons/typescript";
import TailwindIcon from "../icons/tailwind";
import PrismaIcon from "../icons/prisma";

const techStack = [
  {
    title: "HTML",
    icon: <HTMLIcon/>,
  },
  {
    title: "CSS",
    icon: <CSSIcon/>,
  },
  {
    title: "React",
    icon: <ReactIcon/>,
  },
  {
    title: "Next",
    icon: <NextIcon/>,
  },
  {
    title: "Node",
    icon: <NodeIcon/>,
  },
  {
    title: "Express",
    icon: <ExpressIcon/>,
  },
  {
    title: "Javascript",
    icon: <JavascriptIcon/>,
  },
  {
    title: "TypeScript",
    icon: <TypescriptIcon/>,
  },
  {
    title: "Tailwind",
    icon: <TailwindIcon/>,
  },
  {
    title: "Prisma",
    icon: <PrismaIcon/>,
  },
];

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
    x: "-100%",
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
      <ParticlesContainer />
      <div className="wrapper">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="textContainer"
        >
          <div className="name">
            <motion.h2 variants={textVariants}>
              <div>
                <SplitText>TAHSEEN HAIDER</SplitText>
              </div>
            </motion.h2>
            <motion.h1 variants={textVariants}>
              <SplitText>Web developer and UI designer</SplitText>
            </motion.h1>
          </div>
          <motion.div variants={textVariants} className="buttons">
            <motion.a href="#Portfolio" variants={textVariants}>
              See my Latest Works
            </motion.a>
            <motion.a href="#Contact" variants={textVariants}>
              Contact Me
            </motion.a>
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
          {techStack.map((ele) => (
            <div>
              <span>{ele.icon}</span>
              <span>{ele.title}</span>
            </div>
          ))}
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
