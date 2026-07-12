import React from 'react';
import PatternImg from '../imgs/under-barberry.png'; // Убедись, что путь к узору правильный

const TutorialBlock = ({ image, title, desc, bgColor }) => {
  return (
    <div 
      className="tutorial-block" 
      style={{ backgroundColor: bgColor }}
      // ДОБАВЛЯЕМ АНИМАЦИЮ AOS:
      data-aos="flip-up"
      data-aos-duration="800" /* Время переворота в миллисекундах (0.8 сек) */
      data-aos-once="false"     /* Анимация сработает только один раз при скролле */
    >
      <div className="tutorial-block-content">
        <div className="tutorial-image-wrapper">
          <img src={image} alt={title} className="tutorial-main-img" />
        </div>
        <h3 className="tutorial-block-title">{title}</h3>
        <p className="tutorial-block-desc">{desc}</p>
      </div>

      {/* Греческий узор внизу */}
      <div className="tutorial-block-pattern">
        <img src={PatternImg} alt="Greek Pattern" />
      </div>
    </div>
  );
};

export default TutorialBlock;