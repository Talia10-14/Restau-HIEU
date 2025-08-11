import './Hero.css';
import img1 from '../assets/img1.jpeg';
import im9 from '../assets/img9.jpeg';

function Hero() {
  return (
    <section className="hero-section">
      {/* Feuilles de menthe dispersées */}
      <img
        src={im9}
        alt="Mint leaf"
        className="mint-leaf-1"
        style={{'--rotation': '25deg'}}
      />
      <img
        src={im9}
        alt="Mint leaf"
        className="mint-leaf-2"
        style={{'--rotation': '-15deg'}}
      />
      <img
        src={im9}
        alt="Mint leaf"
        className="mint-leaf-3"
        style={{'--rotation': '45deg'}}
      />
      <img
        src={im9}
        alt="Mint leaf"
        className="mint-leaf-4"
        style={{'--rotation': '-30deg'}}
      />
      <img
        src={im9}
        alt="Mint leaf"
        className="mint-leaf-5"
        style={{'--rotation': '60deg'}}
      />

      <div className="hero-container">
        <div className="hero-text">
          <div className="hero-title-wrapper">
            <h1 className="hero-title-main">Rice</h1>
            <h2 className="hero-title-sub">BOWL</h2>
          </div>
          <p className="hero-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className="hero-btn">
            VIEW OUR MENU
          </button>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-bg"></div>
          <img 
            src={img1}
            alt="Rice Bowl" 
            className="hero-image"
          />
        </div>
      </div>
      
      {/* Section inférieure */}
      <div className="hero-bottom">
        <h3 className="hero-bottom-title">WHAT SHOULD I EAT IF I AM ?</h3>
        <button className="hero-bottom-btn">
          <span>COUNTING CALORIES</span>
          <span className="dropdown-arrow">▼</span>
        </button>
      </div>
      
      {/* Cercles colorés flottants */}
      <div className="floating-circle green"></div>
    </section>
  );
}

export default Hero;