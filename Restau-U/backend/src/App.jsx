import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Temoingnage from "./components/Temoingnage";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import "@fontsource/great-vibes"; // Import de la police Great Vibes



 function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Menu />
      <Temoingnage />
      <Newsletter />
      <Footer />
      {/* Ajoutez d'autres composants ou sections ici si nécessaire */}
    </div>
  );
}

export default App;
