import HTMLIcon from "../../icons/html.jsx";
import CSSIcon from "../../icons/css.jsx";
import ExpressIcon from "../../icons/express.jsx";
import JavascriptIcon from "../../icons/javascript.jsx";
import NextIcon from "../../icons/next.jsx";
import NodeIcon from "../../icons/node.jsx";
import PrismaIcon from "../../icons/prisma.jsx";
import ReactIcon from "../../icons/react.jsx";
import TailwindIcon from "../../icons/tailwind.jsx";
import Mongodb from "../../icons/mongodb.jsx";
import TypescriptIcon from "../../icons/typescript.jsx";
import MotionIcon from "../../icons/motion.jsx";
import MuiIcon from "../../icons/mui.jsx";
import SaasIcon from "../../icons/sass.jsx";
import ShadcnIcon from "../../icons/shadcn.jsx";
import "../services.scss";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import ReduxIcon from "../../icons/redux";
import SplitText from "../../../styles/components/SplitText";

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
      <div className="container">
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
        <div className="about">
          {/* Text Section */}
          <div className="head">
            <div className="imageContainer">
              <img src="/frontend.webp" alt="" />
            </div>
            <h1>
              <SplitText>Perfect SkillSet for Your </SplitText>
              <br/>
              <strong>
                <SplitText>Responsive Full-Stack Websites</SplitText>
              </strong>
            </h1>
            <p>
              I build modern, high-performance websites using Next.js, Redux,
              and the MERN stack—delivering seamless frontend and powerful
              backend solutions tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
