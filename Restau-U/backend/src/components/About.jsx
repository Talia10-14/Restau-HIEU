import './About.css';
import img2 from '../assets/img2.jpeg';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image-wrapper">
          <div className="about-image-bg"></div>
          <img 
            src={img2} 
            alt="Healthy Bowl" 
            className="about-image"
          />
        </div>
        <div className="about-content">
          <h3 className="about-subtitle">ABOUT</h3>
          <h2 className="about-title">hieu bowl</h2>
          <p className="about-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
            of type and scrambled it to make a type specimen book. Lorem ipsum dolor, sit amet consectetur
             adipisicing elit. Earum error quidem quaerat iusto ex illo cumque autem, vero dolores laboriosam distinctio praesentium provident odio corrupti aut accusantium at pariatur numquam?
          </p>
          
          <button className="about-btn">
            VIEW OUR MENU
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
