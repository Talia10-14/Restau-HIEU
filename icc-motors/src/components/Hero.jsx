import './Hero.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';

function Hero() {
  const handleSearch = (e) => {
    e.preventDefault();
    // Logique de recherche à implémenter
    console.log('Recherche lancée');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-subtitle">We have everything</p>
          <h1 className="hero-title">THAT A CAR NEED!</h1>
        </div>
        
        <div className="hero-images">
          <img src={img1} alt="Luxury SUV" className="hero-car" />
          <img src={img2} alt="Red pickup truck" className="hero-car" />
        </div>
        
        <form className="hero-search" onSubmit={handleSearch}>
          <div className="search-controls">
            <select name="fuel" id="fuel" className="search-select">
              <option value="">Fuel</option>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="hybrid">Hybrid</option>
              <option value="electric">Electric</option>
            </select>
                        
            <select name="transmission" id="transmission" className="search-select">
              <option value="">Transmission</option>
              <option value="manual">Manual</option>
              <option value="automatic">Automatic</option>
              <option value="cvt">CVT</option>
            </select>

            <select name="type" id="type" className="search-select">
              <option value="">Type</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="hatchback">Hatchback</option>
              <option value="coupe">Coupe</option>
              <option value="pickup">Pickup</option>
            </select>

            <select name="min-price" id="min-price" className="search-select">
              <option value="">Min Price</option>
              <option value="10000">$10,000</option>
              <option value="20000">$20,000</option>
              <option value="30000">$30,000</option>
              <option value="50000">$50,000</option>
            </select>

            <select name="max-price" id="max-price" className="search-select">
              <option value="">Max Price</option>
              <option value="30000">$30,000</option>
              <option value="50000">$50,000</option>
              <option value="75000">$75,000</option>
              <option value="100000">$100,000+</option>
            </select>

            <button type="submit" className="search-button">
              <span>Search</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Hero;