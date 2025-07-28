import { useEffect, useState } from "react";
import Links from "./components/Links";
import ToggleButton from "./components/ToggleButton";
import "./sidebar.scss";
// eslint-disable-next-line no-unused-vars
import { delay, motion } from "framer-motion";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const variants = {
    open: {
      clipPath: "circle(170vh at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(24px at 32px 32px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div animate={open ? "open" : "closed"} className="sidebar">
      <motion.div style={{width: mounted?"400px":"0px"}} variants={variants} className="bg">
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}
