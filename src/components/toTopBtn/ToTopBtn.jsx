import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import "./toTopBtn.scss";

export default function ToTopBtn() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY >= (window.innerHeight-100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`toTopBtn ${visible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to Top"
    >
      To The Top
      <ArrowUp size={20} />
    </button>
  );
}
