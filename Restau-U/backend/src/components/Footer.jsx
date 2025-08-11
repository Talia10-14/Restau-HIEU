import './Footer.css';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Colonne 1 - About Us */}
          <div>
            <h3 className="footer-title">About Us</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">info@example.com</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
              <li><a href="#" className="footer-link">FAQ</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Colonne 2 - Links */}
          <div>
            <h3 className="footer-title">Links</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Menu</a></li>
              <li><a href="#" className="footer-link">About</a></li>
              <li><a href="#" className="footer-link">Profile</a></li>
              <li><a href="#" className="footer-link">Social Media</a></li>
            </ul>
          </div>
          
          {/* Colonne 3 - Support */}
          <div>
            <h3 className="footer-title">Support</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Terms</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
              <li><a href="#" className="footer-link">Order</a></li>
              <li><a href="#" className="footer-link">Support Global</a></li>
            </ul>
          </div>
          
          {/* Colonne 4 - Social Media */}
          <div>
            <h3 className="footer-title">Social Media</h3>
            <div className="footer-social">
              <Facebook className="footer-icon" />
              <Twitter className="footer-icon" />
              <Instagram className="footer-icon" />
            </div>
          </div>
        </div>
        
        {/* Bas du footer */}
        <div className="footer-bottom">
          <p>© 2025 All right reserved Inc.</p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Accessibility</a>
            <a href="#" className="footer-link">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
