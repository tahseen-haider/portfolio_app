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
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="people" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            distinctio culpa, possimus consectetur ipsa reprehenderit dolorem
            praesentium id ipsam nisi? Quos, quaerat! Reiciendis perferendis
            ducimus vero est optio, odit earum!
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            distinctio culpa, possimus consectetur ipsa reprehenderit dolorem
            praesentium id ipsam nisi? Quos, quaerat! Reiciendis perferendis
            ducimus vero est optio, odit earum!
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            distinctio culpa, possimus consectetur ipsa reprehenderit dolorem
            praesentium id ipsam nisi? Quos, quaerat! Reiciendis perferendis
            ducimus vero est optio, odit earum!
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            distinctio culpa, possimus consectetur ipsa reprehenderit dolorem
            praesentium id ipsam nisi? Quos, quaerat! Reiciendis perferendis
            ducimus vero est optio, odit earum!
          </p>
          <button>GO</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
