import './Featured.css';
import { FiShoppingCart } from 'react-icons/fi';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

function Featured() {
  const cars = [
    {
      id: 1,
      name: "Citroen C4",
      price: "£21,906.00",
      image: img1
    },
    {
      id: 2,
      name: "Nissan Qashqai", 
      price: "£22,513.00",
      image: img2
    },
    {
      id: 3,
      name: "Renault Captur",
      price: "£21,906.00", 
      image: img3
    },
    {
      id: 4,
      name: "Vauxhall Corsa",
      price: "£19,190.00",
      image: img4
    }
  ];

  return (
    <>
      <section className="featured-cars">
        <h2>FEATURED CARS</h2>
        <p>Checkout Our Brand New Collection</p>
        
        <div className="car-grid">
          {cars.map((car) => (
            <div key={car.id} className="car-card">
              <div className="car-image-container">
                <img src={car.image} alt={car.name} />
              </div>
              <div className="car-info">
                <h3>{car.name}</h3>
                <p className="price">{car.price}</p>
                <button>
                  <FiShoppingCart className="cart-icon" />
                  Reserve Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Featured;
