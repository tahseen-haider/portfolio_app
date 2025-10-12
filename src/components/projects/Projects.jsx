import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring } from "framer-motion";
import SplitText from "../../styles/components/SplitText";
import { LucideArrowRight } from "lucide-react";
import ProjectShowcase from "./components/ProjectShowcase";

import "./projects.scss";

const items = [
  {
    id: 1,
    title: "AI-Powered Medical & Healthcare App",
    phoneImg: "/images/projects/1/phone.webp",
    laptopImg: "/images/projects/1/laptop.webp",
    stack: "Full Stack (Next.js, JWT, SSE, TypeScript, Prisma)",
    details: [
      "LLM-powered healthcare chatbot with real-time streaming via SSE",
      "Role-based access control for Admin, Doctor, and User roles",
      "Interactive dashboards for administrative and medical management",
    ],
    link: "http://ai-medical-healthcare-afxk.vercel.app/",
  },
  {
    id: 2,
    title: "Fast Food Online Store",
    phoneImg: "/images/projects/2/phone.jpg",
    laptopImg: "/images/projects/2/laptop.jpg",
    stack: "Frontend Only (React.js, JavaScript, Tailwind)",
    details: [
      "Responsive React-based burger ordering UI with Bootstrap styling",
      "Custom auth system with Google OAuth and role-based authorization",
      "Centralized state management using Redux for scalable data flow",
    ],
    link: "https://grill-and-blaze-burgers.vercel.app/",
  },
  // {
  //   id: 3,
  //   title: "AI-Powered Medical & Healthcare App",
  //   phoneImg: "/images/projects/1/phone.webp",
  //   laptopImg: "/images/projects/1/laptop.webp",
  //   stack: "Full Stack (Next.js, JWT, SSE, TypeScript, Prisma)",
  //   details: [
  //     "Integrated LLM-powered chatbot for healthcare Q&A",
  //     "Implemented authentication with user roles (admin, user, doctor)",
  //     "Enabled secure medical report uploads with streaming responses via SSE",
  //   ],
  //   link: "http://ai-medical-healthcare-afxk.vercel.app/",
  // },
];

const Project = ({ item }) => {
  return (
    <section className="eachProject">
      <div className="container">
        {/* Desc */}
        <div className="desc">
          <div className="heading">
            <h1 className="title">
              <SplitText>{item.title}</SplitText>
            </h1>
            <h2 className="stack">{item.stack}</h2>
          </div>
          <ul>
            {item.details.map((li, i) => (
              <li key={i}>
                <LucideArrowRight size={16} className="icon" /> {li}
              </li>
            ))}
          </ul>

          {/* Link */}
          <a
            href={item.link}
            target="_blank"
            about="live demo link"
            role="link button"
          >
            Live Demo
          </a>
        </div>
        {/* Showcase */}
        <div className="showcase">
          <ProjectShowcase
            laptopImg={item.laptopImg}
            phoneImg={item.phoneImg}
          />
        </div>
      </div>
    </section>
  );
};

export default function Projects() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progressWrapper">
        <div className="progress">
          <h1>
            <SplitText>Featured Works</SplitText>
          </h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
      </div>
      {items.map((item) => (
        <Project item={item} key={item.id} />
      ))}
    </div>
  );
}
