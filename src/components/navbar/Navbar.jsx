import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span 
          initial={{ opacity: 0.2, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{duration:1}}
        >
          Tahseen Haider
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="facebook-link" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="instagram-link" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="youtube-link" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="dribbble-link" />
          </a>
        </div>
      </div>
    </div>
  );
}
