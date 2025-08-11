import'./Header.css';


function Header() {
  return (
   <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo-purple">HIEU</div>
          <div className="logo-red">BOWL</div>
          <div className="tagline">Vietnamese Kitchen</div>
        </div>  
        <nav className="menu">
          <a href="#">PHO NOODLE SOUP</a>
          <a href="#">RICE BOWLS</a>
          <a href="#">SALAD BOWLS</a>
          <a href="#">SIDES</a>
          <a href="#">BEVERAGES</a>
          <a href="#">KIDS</a>
        </nav>
      </div>
    </header>
  );
}
export default Header;