import "./app.scss";
import Hero from "./components/hero/Hero.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import Services from "./components/services/Services.jsx";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero/>
      </section>
      <section id="Services"><Parallax type="services"/></section>
      <section><Services/></section>
      <section id="Portfolio"><Parallax type="portfolio"/></section>
      <section>Portfolio</section>
      <section>Portfolio</section>
      <section>Portfolio</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
