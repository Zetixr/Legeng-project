import React from 'react';

const ProductCard = ({ title, taste, description, image, color, bgPattern, id }) => {
  return (
    <div 
      className="product-card" 
      style={{ backgroundColor: color }}
      data-aos="zoom-out"               // Анимация появления снизу
      data-aos-delay={id * 100}        // Поочередное появление (каждая следующая карточка на 100мс позже)
    >
      <div className="product-card-image">
        <img src={image} alt={`${title} ${taste}`} />
      </div>
      
      <div className="product-card-info">
        <h3 className="product-card-title">{title}</h3>
        <h4 className="product-card-taste">{taste}</h4>
        <p className="product-card-desc">{description}</p>
        
        <div className="product-card-weights">
          <span className="weight-badge">14Г</span>
          <span className="weight-badge">30ГР</span>
        </div>
      </div>

      <div className="product-card-pattern">
        <img src={bgPattern} alt="Узор вкуса" />
      </div>
    </div>
  );
};

export default ProductCard;