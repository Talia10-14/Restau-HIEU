import './Menu.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "YOGI HEALTHY SIDE",
      price: "$24.00",
      image: img3,
    },
    {
      id: 2,
      name: "YOGI HEALTHY SIDE",
      price: "$24.00",
      image: img4,
    },
    {
      id: 3,
      name: "YOGI HEALTHY SIDE",
      price: "$24.00",
      image: img5,
    }
  ];

  return (
    <section className="menu-section">
      <div className="menu-container">
        <h2 className="menu-title">OUR MENU</h2>
        <p className="menu-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
          Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
        
        <div className="menu-items-wrapper">
          {menuItems.map((item, index) => (
            <div key={item.id} className="menu-item">
              <div className="menu-image-wrapper">
                <div 
                  className="menu-image-bg" 
                  style={{ borderColor: item.color }}
                ></div>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="menu-image"
                />
              </div>
              <h3 className="menu-item-name">{item.name}</h3>
              <p className="menu-item-price">
                Only <span>{item.price}</span>
              </p>
              <p className="menu-item-buy">Buy online</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
