import SplitText from "../../styles/components/SplitText";
import CSSIcon from "../icons/css";
import ExpressIcon from "../icons/express";
import HTMLIcon from "../icons/html";
import JavascriptIcon from "../icons/javascript";
import NextIcon from "../icons/next";
import NodeIcon from "../icons/node";
import PrismaIcon from "../icons/prisma";
import ReactIcon from "../icons/react";
import TailwindIcon from "../icons/tailwind";
import Mongodb from "../icons/mongodb";
import TypescriptIcon from "../icons/typescript";
import MotionIcon from "../icons/motion";
import MuiIcon from "../icons/mui";
import SaasIcon from "../icons/sass";
import ShadcnIcon from "../icons/shadcn";
import "./services1.scss";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import ReduxIcon from "../icons/redux";

const tech = [
  {
    title: "HTML",
    icon: <HTMLIcon />,
  },
  {
    title: "CSS",
    icon: <CSSIcon />,
  },
  {
    title: "React",
    icon: <ReactIcon />,
  },
  {
    title: "Next",
    icon: <NextIcon />,
  },
  {
    title: "Node",
    icon: <NodeIcon />,
  },
  {
    title: "Express",
    icon: <ExpressIcon />,
  },
  {
    title: "MongoDB",
    icon: <Mongodb />,
  },
  {
    title: "Redux",
    icon: <ReduxIcon />,
  },
  {
    title: "Javascript",
    icon: <JavascriptIcon />,
  },
  {
    title: "TypeScript",
    icon: <TypescriptIcon />,
  },
  {
    title: "Sass",
    icon: <SaasIcon />,
  },
  {
    title: "Tailwind",
    icon: <TailwindIcon />,
  },
  {
    title: "Prisma",
    icon: <PrismaIcon />,
  },
  {
    title: "Motion",
    icon: <MotionIcon />,
  },
  {
    title: "Material Ui",
    icon: <MuiIcon />,
  },
  {
    title: "ShadCN",
    icon: <ShadcnIcon />,
  },
];

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

export default function Services1() {
  return (
    <motion.div className="services" variants={variants}>
      <div className="heading">
        <h1>
          <SplitText>What I Bring to the Table</SplitText>
        </h1>
      </div>
      <div className="skills">
        <div className="tech">
          <h2>Tech Stack</h2>
          <div className="techContainer">
            {tech.map((ele) => (
              <div className="techBox" key={ele.title}>
                {ele.icon} {ele.title}
              </div>
            ))}
          </div>
        </div>
        <div className="separator" />
        <div className="about">Something...</div>
      </div>
    </motion.div>
  );
}
