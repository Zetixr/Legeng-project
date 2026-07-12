import React from 'react';
import ProductCard from '../components/productCard';
import lineImg from '../imgs/line.png'; 
import allProductsImg from '../imgs/all-products.png';
import mintImg from '../imgs/mint.png';
import peachImg from '../imgs/peach.png';
import mangoImg from '../imgs/mango.png';
import grapeImg from '../imgs/grape.png';
import barberryImg from '../imgs/barberry.png';

import underAllProducts from '../imgs/under-all-products.png';
import underMint from '../imgs/under-mint.png';
import underPeach from '../imgs/under-peach.png';
import underMango from '../imgs/under-mango.png';
import underGrape from '../imgs/under-grape.png';
import underBarberry from '../imgs/under-barberry.png';

import '../assets/productsGrid.css';

const ProductsGrid = () => {
  const productsData = [
    { id: 1, title: "LEGEND", taste: "МЯТА", description: "Ароматная мята мягко освежает и оставляет приятный холодок.", image: mintImg, color: "#2E7D52", bgPattern: underMint },
    { id: 2, title: "LEGEND", taste: "ПЕРСИК", description: "Сладкий спелый персик с сочным и глубоким ароматом.", image: peachImg, color: "#D96B27", bgPattern: underPeach },
    { id: 3, title: "LEGEND", taste: "МАНГО", description: "Тропическое спелое манго с ярким выраженным послевкусием.", image: mangoImg, color: "#E5A913", bgPattern: underMango },
    { id: 4, title: "LEGEND", taste: "ВИНОГРАД", description: "Насыщенный темный виноград с легкой благородной кислинкой.", image: grapeImg, color: "#5E35B1", bgPattern: underGrape },
    { id: 5, title: "LEGEND", taste: "БАРБАРИС", description: "Ностальгический конфетный вкус с приятной кисло-сладкой ноткой.", image: barberryImg, color: "#C2185B", bgPattern: underBarberry }
  ];

  return (
    <section className="products-section">
      <div className="products-blue-side"></div>

      <div className="products-bg-line">
        <img src={lineImg} alt="Фоновый узор часть 1" className="line-1" />
        <img src={lineImg} alt="Фоновый узор часть 2" className="line-2" />
      </div>

      <div className="products-container">
        {/* АНИМАЦИЯ ДЛЯ ЗАГОЛОВКА */}
        <h2 className="section-title" data-aos="fade-right">ПРОДУКТЫ</h2>
        
        <div className="products-grid-container">
          {/* АНИМАЦИЯ ДЛЯ БОЛЬШОЙ КАРТОЧКИ */}
          <div className="main-product-card" data-aos="zoom-out">
            <div className="main-card-image">
              <img src={allProductsImg} alt="Вся продукция Legend" />
            </div>
            <div className="main-card-info">
              <h3 className="main-card-title">ВСЯ ПРОДУКЦИЯ</h3>
              <p className="main-card-tastes-list">МЯТА, ПЕРСИК, МАНГО, ВИНОГРАД, БАРБАРИС</p>
              <p className="main-card-desc">Ароматный жевательный табак премиального качества с линейкой насыщенных вкусов.</p>
              <div className="main-card-weights">
                <span className="weight-badge">14Г</span>
                <span className="weight-badge">30ГР</span>
              </div>
            </div>
            <div className="main-card-pattern"></div>
          </div>

          {/* МАЛЕНЬКИЕ КАРТОЧКИ */}
          {productsData.map((product) => (
            <ProductCard 
              key={product.id}
              title={product.title}
              taste={product.taste}
              description={product.description}
              image={product.image}
              color={product.color}
              bgPattern={product.bgPattern}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;