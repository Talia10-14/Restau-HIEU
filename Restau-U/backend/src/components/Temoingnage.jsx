import React from 'react';
import './Temoingnage.css';
import im7 from '../assets/img7.jpeg';
import im8 from '../assets/img8.jpeg';
import im9 from '../assets/img9.jpeg';
const Temoingnage = () => {
  return (
    <section className="testimonial-section">
      {/* Image plat à gauche */}
      <div className="testimonial-left">
        <img
          src={im8}
          alt="Bowl of soup"
          className="testimonial-image"
        />
      </div>

      {/* Témoignage au centre */}
      <div className="testimonial-center">
        <div className="testimonial-bubble">
          <q className="testimonial-text">
            “Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.”
          </q>
          <div className="testimonial-author">
            <img
              src={im7}
              alt="Misha Krener"
              className="author-photo"
            />
            <div>
              <p className="author-name">Misha Krener</p>
              <p className="author-handle">@MishaPresence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Texte à droite */}
      <div className="testimonial-right">
        <h2 className="testimonial-title">Our Happy Customers</h2>
        <p className="testimonial-subtext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. We’re getting your best reviews!
        </p>
        <div className="testimonial-arrow">→</div>
      </div>

      {/* Feuille de menthe */}
      <img
        src={im9}
        alt="Mint leaf"
        className="testimonial-deco"
      />
    </section>
  );
};

export default Temoingnage;
