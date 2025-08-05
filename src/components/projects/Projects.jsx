import { useRef } from "react";
import "./projects.scss";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SplitText from "../../styles/components/SplitText";

const items = [
  {
    id: 1,
    title: "Project Title 1",
    img: "/placeholder.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nostrum debitis ea harum, inventore quibusdam neque placeat veniam consequuntur? Ad, dolores excepturi sunt blanditiis beatae iusto nam? Hic, quae assumenda!",
  },
  {
    id: 2,
    title: "Project Title 2",
    img: "/placeholder.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nostrum debitis ea harum, inventore quibusdam neque placeat veniam consequuntur? Ad, dolores excepturi sunt blanditiis beatae iusto nam? Hic, quae assumenda!",
  },
  {
    id: 3,
    title: "Project Title 3",
    img: "/placeholder.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nostrum debitis ea harum, inventore quibusdam neque placeat veniam consequuntur? Ad, dolores excepturi sunt blanditiis beatae iusto nam? Hic, quae assumenda!",
  },
];

const Project = () =>
  // {
  //  item
  // }
  {
    // const ref = useRef();
    // const { scrollYProgress } = useScroll({
    //   target: ref,
    // });

    // const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    return (
      <section className="eachProject">
        <div className="container"></div>
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
