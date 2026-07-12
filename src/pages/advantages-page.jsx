import React from 'react';
import AdvantagesBlock from '../components/advantages-block';
import '../assets/advantages-page.css'; 

// Импорт твоих картинок из папки imgs
import techImg from '../imgs/advantages-technologies.png';
import productImg from '../imgs/advantages-product.png';
import ligallImg from '../imgs/advantages-ligall.png';
import evolutionImg from '../imgs/advantages-evolution.png';

const AdvantagesPage = () => {
    return (
        <section className="advantages-section">
            <div className="advantages-container">
                
                {/* Главный заголовок страницы с греческим шрифтом */}
                <h2 className="advantages-page-title" data-aos="fade-down" data-aos-duration="1000">
                    НАШИ ПРЕИМУЩЕСТВА
                </h2>

                {/* Флекс-контейнер для 4 блоков */}
                <div className="advantages-flex-container">
                    
                    <AdvantagesBlock 
                        img={techImg} 
                        title="ПРОИЗВОДСТВО И ТЕХНОЛОГИИ" 
                        desc="Использование прогрессивных технологий и продвинутого оборудования гарантирует надежное, стабильное качество каждой табачной порции." 
                        bgColor="#3E297A" 
                        delay="0" 
                    />

                    <AdvantagesBlock 
                        img={productImg} 
                        title="ТАБАК И ДОБАВКИ" 
                        desc="Используем высококлассный органический табак, лучшие натуральные ароматизаторы и компоненты для идеального баланса." 
                        bgColor="#117E43" 
                        delay="150" 
                    />

                    <AdvantagesBlock 
                        img={ligallImg} 
                        title="ЛЕГАЛЬНОСТЬ И МАРКИРОВКА" 
                        desc="Полная законность, работа строго по лицензии. Все позиции сертифицированы и имеют акцизные марки." 
                        bgColor="#E21A4B" 
                        delay="300" 
                    />

                    <AdvantagesBlock 
                        img={evolutionImg} 
                        title="РАЗВИТИЕ И НАДЕЖНОСТЬ" 
                        desc="Постоянно развиваемся, улучшаем производство и предлагаем новые решения, сохраняя статус надежного партнера." 
                        bgColor="#FF9E00" 
                        delay="450" 
                    />

                </div>

            </div>
        </section>
    );
};

export default AdvantagesPage;