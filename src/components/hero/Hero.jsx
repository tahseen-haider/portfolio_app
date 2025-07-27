import "./hero.scss";

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>TAHSEEN HAIDER</h2>
          <h1>Web developer and UI designer</h1>
          <div className="buttons">
            <button>See my Latest Works</button>
            <button>Contact Me</button>
          </div>
          <img src="/scroll.png" alt="image" />
        </div>
        <div className="imageContainer">
          <img className="main-image" src="/heroo.webp" alt="hero-image" />
          {/* <img className="sec-image" src="/hero.webp" alt="hero-image" /> */}
        </div>
      </div>
    </div>
  );
}
