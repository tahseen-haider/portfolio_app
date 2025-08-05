import { useState } from "react";
import "../projects.scss";
import { ArrowBigLeft } from "lucide-react";
export default function ProjectShowcase() {
  const [currentScreen, setCurrentScreen] = useState("laptop");

  function DisplayScreen() {
    return (
      <div className={`screen ${
          currentScreen === "laptop"
            ? "laptop-screen"
            : "phone-screen"
        }`}>
        <img
          src={
            currentScreen === "laptop"
              ? "/images/projects/laptop.png"
              : "/images/projects/phone.png"
          }
          alt={currentScreen === "laptop" ? "laptop-image" : "phone-image"}
        />
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
      </button>
    );
  }

  return (
    <div className="container">
      <div className="screenWrapper">
        {/* Screen */}
        <DisplayScreen />
        {/* Device Toggler */}
        <DeviceToggler />
      </div>
    </div>
  );
}
