import React from 'react';
import '../assets/Hero.css';
import circleImg from '../imgs/circle.png';      
import helmetImg from '../imgs/hero-logo.png';    
import bankImg from '../imgs/hero-product.png';   
import lineImg from '../imgs/line.png';           

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-line">
        <img src={lineImg} alt="Фоновый узор" />
      </div>

      <div className="hero-container">
        <div className="hero-left-brand">
          <div className="interactive-logo-block">
            <img src={circleImg} alt="Вращающийся меандр" className="spinning-logo-circle" />
            <img src={helmetImg} alt="Шлем" className="static-helmet" />
          </div>
          <div className="brand-text-wrapper">
            <p className="sub-title">ЖЕВАТЕЛЬНЫЙ ТАБАК</p>
            <h1 className="main-title">LEGEND</h1>
            <h2 className="title-footer">OF AFINA</h2>
          </div>
        </div>

        <div className="hero-right-products">
          <img src={bankImg} alt="Продукция Legend" className="products-image" />
        </div>
      </div>

      <div className="hero-blue-side"></div>
    </section>
  );
};

export default Hero;