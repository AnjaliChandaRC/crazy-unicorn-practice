import './App.css';
import AboutUs from './components/AboutUs';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import LatestNews from './components/LatestNews';
import OurStory from './components/OurStory';
import Roadmap from './components/Roadmap';
import Team from './components/Team';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <OurStory />
      <AboutUs />
      <Roadmap />
      <Team />
      <Faq />
      <LatestNews />
      <Footer/>
    </>
  );
}

export default App;
