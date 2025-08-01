import "./app.scss";
import Contact from "./components/contact/Contact.jsx";
import Cursor from "./components/cursor/Cursor.jsx";
import Hero from "./components/hero/Hero.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Services1 from "./components/services1/Services1.jsx";
import Services2 from "./components/services2/Services2.jsx";
import ToTopBtn from "./components/toTopBtn/ToTopBtn.jsx";

function App() {
  return (
    <div>
      <Cursor />
      <ToTopBtn/>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills">
        <Services1 />
      </section>
      <section>
        <Services2 />
      </section>
      <section id="Projects">
        <Portfolio />
      </section>
      <div style={{ height: "40px" }} />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
