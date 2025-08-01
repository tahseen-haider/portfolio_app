import { useRef } from "react";
import "./portfolio.scss";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

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

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section className="eachProject">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="portfolio-image" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Portfolio() {
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
    <div className="portfolio" ref={ref}>
      <div className="progressWrapper">
        <div className="progress">
          <h1>Featured Works</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}
