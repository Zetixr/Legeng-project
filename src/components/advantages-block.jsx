import React from 'react';
// Точное название файла, которое ты указал: under-barberry.png
import patternImg from '../imgs/under-barberry.png';

const AdvantagesBlock = ({ img, title, desc, bgColor, delay }) => {
    return (
        <div 
            className="advantages-card" 
            style={{ backgroundColor: bgColor }}
            data-aos="flip-up" 
            data-aos-duration="800" 
            data-aos-delay={delay}
        >
            <div className="advantages-card-content">
                <div className="advantages-icon-box">
                    <img src={img} alt={title} className="advantages-img" />
                </div>
                <h3 className="advantages-card-title">{title}</h3>
                <p className="advantages-card-desc">{desc}</p>
            </div>
            
            {/* Блок с греческим узором меандра */}
            <div className="advantages-card-bottom-pattern">
                <img src={patternImg} alt="Греческий меандр" className="pattern-svg" />
            </div>
        </div>
    );
};

export default AdvantagesBlock;