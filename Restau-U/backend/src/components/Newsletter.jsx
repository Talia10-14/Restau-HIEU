import { useState } from 'react';
import './Newsletter.css';
import img8 from '../assets/img8.jpeg'; // Assuming you have an image for the newsletter

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        {/* Texte et formulaire */}
        <div className="newsletter-text">
            <div className='newsletter-text-content'>
          <h2 className="newsletter-title">Ready to get started?</h2>
          <p className="newsletter-subtitle">
            Get a guided demo Lorem Ipsum dolor sit amet
          </p>
            </div>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
            />
            <button 
              onClick={handleSubmit}
              className="newsletter-button"
            >
              GET STARTED
            </button>
          </div>
          
        </div>
        
        {/* Image */}
        <div className="newsletter-image-wrapper">
          <img 
            src={img8}
            alt="Healthy Bowl" 
            className="newsletter-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
