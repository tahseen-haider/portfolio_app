import { Download } from "lucide-react";
import GithubIcon from "../icons/github";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <motion.div
        className="wrapper"
        initial={{ opacity: 0.2, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span>Tahseen Haider</span>
        <div className="buttonsWrapper">
          <div className="buttons">
            <a
              className="cv-download"
              download
              href="/docs/Tahseen_Haider_Web_Development_CV.pdf"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>
          </div>
          <div className="social">
            <a href="https://github.com/tahseen-haider" target="_blank">
              <img src="/images/navbar/github.jpg" alt="github-link" />
            </a>
            <a
              href="https://www.facebook.com/people/Tahseen-Haider/pfbid06dGfVscMm12bERh5ojavyAqUj398hzmYSeSEorkSnApiBxy5Va3FGim5H1VbFzsAl/"
              target="_blank"
            >
              <img src="/images/navbar/facebook.png" alt="facebook-link" />
            </a>
            <a href="https://www.instagram.com/tahseen021/" target="_blank">
              <img src="/images/navbar/instagram.png" alt="instagram-link" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
