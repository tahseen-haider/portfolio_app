import "./app.scss";
import Contact from "./components/contact/Contact.jsx";
import Cursor from "./components/cursor/Cursor.jsx";
import Hero from "./components/hero/Hero.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Services from "./components/services/Services.jsx";

function App() {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Portfolio">
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
