import './Used.css';
import { FiShoppingCart } from 'react-icons/fi';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';

function Used() {
  const cars = [
    {
      id: 1,
      name: "Citroen C4",
      price: "£21,906.00",
      image: img5
    },
    {
      id: 2,
      name: "Nissan Qashqai", 
      price: "£22,513.00",
      image: img6
    },
    {
      id: 3,
      name: "Renault Captur",
      price: "£21,906.00", 
      image: img7
    }
  ];

  return (
    <>
      <section className="used-cars">
        <h2>USED CARS</h2>
        <p>Checkout Our Second Hand Collection</p>
        
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

export default Used;
