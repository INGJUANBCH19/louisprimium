import React, { useState, useEffect } from 'react';
import promotionImage from '../../assets/p1.jpg'; // Importa la imagen de la promoción
import './Promotion.css';

const Promotion = () => {
  // Estado para almacenar el tiempo restante
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 horas en segundos

  // Función para calcular el tiempo restante
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000); // Actualiza cada segundo

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  // Convertir el tiempo restante en horas, minutos y segundos
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="promotion-section">
      <div className="promotion-content">
        <img src={promotionImage} alt="Promoción Louisprimium" className="promotion-image" />
        <div className="promotion-text">
          <h2>¡Promoción especial!</h2>
          <p>
            No te pierdas nuestra oferta exclusiva. Obtén un descuento increíble en las mejores
            plataformas de streaming. ¡Solo por tiempo limitado!
          </p>
          <div className="countdown-timer">
            <span>{String(hours).padStart(2, '0')}</span>:
            <span>{String(minutes).padStart(2, '0')}</span>:
            <span>{String(seconds).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;