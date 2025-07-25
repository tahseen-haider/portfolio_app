import "./app.scss";
import Hero from "./components/hero/Hero.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero/>
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Parallax</section>
      <section>Portfolio</section>
      <section>Portfolio</section>
      <section>Portfolio</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
