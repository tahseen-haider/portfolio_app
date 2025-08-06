import { useState } from "react";
import "../projects.scss";
import { ArrowBigDown, ArrowBigDownDash, ArrowBigLeft, ArrowBigUpDash } from "lucide-react";
export default function ProjectShowcase() {
  const [currentScreen, setCurrentScreen] = useState("laptop");

  function DisplayScreen() {
    return (
      <div className="screenWrapper">
        {/* Screen */}
        <div
          className={
            currentScreen === "laptop" ? "laptop-screen" : "phone-screen"
          }
        >
          <div className="screenImage">
            <div className="screen">
              <img
                src={`/images/projects/${currentScreen}.png`}
                alt={`${currentScreen}-frame`}
              />
            </div>
            <div className="content">
              <img
                src={`/images/projects/1/${currentScreen}.webp`}
                alt="project-screenshot"
              />
            </div>
          </div>
          {/* Guide Text */}
          <div className="guide">
            <ArrowBigUpDash />
            <p>Scroll</p>
            <ArrowBigDownDash />
          </div>
        </div>
      </div>
    );
  }
  function DeviceToggler() {
    return (
      <button
        className={`toggler ${
          currentScreen === "laptop"
            ? "phone-toggle-button"
            : "laptop-toggle-button"
        }`}
        onClick={() => {
          setCurrentScreen(currentScreen === "phone" ? "laptop" : "phone");
        }}
      >
        <img
          src={
            currentScreen === "laptop"
              ? "/images/projects/phone.png"
              : "/images/projects/laptop.png"
          }
          alt={currentScreen === "laptop" ? "phone-image" : "laptop-image"}
        />
        {/* Placeholder img */}
        <div className="placeholder">
          <ArrowBigLeft />
        </div>

        {/* Guide */}
        <div className="guide">
          <p>Toggle Device</p>
          <ArrowBigDown/>
        </div>
      </button>
    );
  }

  return (
    <div className="container">
      {/* Screen */}
      <DisplayScreen />
      {/* Device Toggler */}
      <DeviceToggler />
    </div>
  );
}
