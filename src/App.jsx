import React from 'react';
import Header from './components/Header/Header';
import ServiceCard from './components/ServiceCard/ServiceCard';
import NetflixImage from './assets/netflix.png';
import DisneyImage from './assets/disney.png';
import HboImage from './assets/hbo.png';
import PrimeVideoImage from './assets/primevideo.png';
import AppletvImage from './assets/appletv.png';
import Banner from './components/Banner/Banner'; // Importa el componente Banner
import bannerImage from './assets/banner.jpg'; // Importa la imagen del banner
import Carousel from './components/Carousel/Carousel';
import Promotion from './components/Promotion/Promotion';
import './App.css';

const services = [
  {
    name: 'Netflix',
    description: 'Disfruta de series y películas en streaming.',
    image :[NetflixImage],
  },
  {
    name: 'Disney+',
    description: 'Películas y series de Disney, Pixar, Marvel y más.',
    image: [DisneyImage],
  },
  {
    name: 'HBO Max',
    description: 'Series exclusivas y películas de HBO.',
    image: [HboImage],
  },
  {
    name: 'Prime Video',
    description: 'Streaming de películas y series de Amazon.',
    image:[PrimeVideoImage],
  },
  {
    name: 'Apple TV+',
    description: 'Originales de Apple en streaming.',
    image: [AppletvImage],
  },
];

function App() {
  return (
    <div className="App">
      {/* Banner */}
      <Banner image={bannerImage} altText="Banner Louisprimium" />

    
      <Header />
      <h2>Nuestras Plataformas</h2>
      <div className="main-container">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <div className="main-content">
      {/* Carrusel de plataformas */}
      <section className="platforms-section">
        <h2>Top Combos</h2>
        <Carousel />
      </section>
      <Promotion /> {/* Añade la sección de promoción */}
      </div>
    </div>
  );
}

export default App;
