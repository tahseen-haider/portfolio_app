import "../services.scss";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ChromeIcon from "../../icons/chrome";
import VscodeIcon from "../../icons/vscode";
import FigmaIcon from "../../icons/figma";
import GithubIcon from "../../icons/github";
import PhotoshopIcon from "../../icons/photoshop";
import BlenderIcon from "../../icons/blender";
import PostmanIcon from "../../icons/postman";
import PinterestIcon from "../../icons/pinterest";
import LinkedinIcon from "../../icons/linkedin";
import GmailIcon from "../../icons/gmail";
import DriveIcon from "../../icons/drive";
import ChatgptIcon from "../../icons/chatgpt";
import WindowsIcon from "../../icons/windows";
import PowershellIcon from "../../icons/powershell";
import AndroidIcon from "../../icons/android";
import WinrarIcon from "../../icons/winrar";
import SplitText from "../../../styles/components/SplitText";

const apps = [
  {
    title: "VSCode",
    icon: <VscodeIcon />,
  },
  {
    title: "Postman",
    icon: <PostmanIcon />,
  },
  {
    title: "Dev Tools",
    icon: <ChromeIcon />,
  },
  {
    title: "GitHub",
    icon: <GithubIcon />,
  },
  {
    title: "Figma",
    icon: <FigmaIcon />,
  },
  {
    title: "Pinterest",
    icon: <PinterestIcon />,
  },
  {
    title: "Photoshop",
    icon: <PhotoshopIcon />,
  },
  {
    title: "Blender 3D",
    icon: <BlenderIcon />,
  },
  {
    title: "LinkedIn",
    icon: <LinkedinIcon />,
  },
  {
    title: "Gmail",
    icon: <GmailIcon />,
  },
  {
    title: "ChatGpt",
    icon: <ChatgptIcon />,
  },
  {
    title: "Drive",
    icon: <DriveIcon />,
  },
  {
    title: "Windows",
    icon: <WindowsIcon />,
  },
  {
    title: "PowerShell",
    icon: <PowershellIcon />,
  },
  {
    title: "WinRAR",
    icon: <WinrarIcon />,
  },
  {
    title: "Android",
    icon: <AndroidIcon />,
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

export default function Services2() {
  return (
    <motion.div className="services" variants={variants}>
      <div className="heading">
        <h1>
          <SplitText>What I Bring to the Table</SplitText>
        </h1>
        <div className="bar" />
      </div>
      <div className="container">
        <div className="about">
          {/* Text Section */}
          <div className="head">
            <div className="imageContainer">
              <img width={30} height={30} src="/images/services/backend.webp" alt="tools-image" />
            </div>
            <h1>
              <SplitText>Expert Tools Behind Every </SplitText>
              <br />
              <strong>
                <SplitText>
                  Line of Code. Pixel of Design. Click of Deploy.
                </SplitText>
              </strong>
            </h1>
            <p>
              I work with a powerful set of development and design tools to
              deliver fast, functional, and future-proof web solutions. From
              coding and debugging to UI/UX design, version control, and 3D
              modeling — I use the best in class to bring your ideas to life
              with precision and polish.
            </p>
          </div>
        </div>
        <div className="separator" />
        <div className="tech">
          <h2>Tools</h2>
          <div className="techContainer">
            {apps.map((ele, i) => (
              <div className="techBox" key={i}>
                {ele.icon} {ele.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
