import React from 'react';
import TutorialBlock from '../components/tutorial-block';
import "../assets/tutorial.css";

// Картинки для блоков
import firstImg from '../imgs/tutorial-first.png';
import secondImg from '../imgs/tutorial-second.png';
import thirdImg from '../imgs/tutorial-third.png';
import Line from "../imgs/line.png";

// ИМПОРТ ВСЕХ КРЕДИТС-КАРТИНОК
import creditsOverLine from "../imgs/credits-over-line.png"; 
import creditsFirst from "../imgs/credits-first.png";       
import creditsLogo from "../imgs/credits-logo.png";         
import creditsQrCode from "../imgs/credits-qr-code.png";     
import creditsPortion from "../imgs/credits-portion.png";   
import creditsDescription from "../imgs/credits-description.png"; 

const TutorialSection = () => {
    const steps = [
        { id: 1, image: firstImg, title: "ПОЛОЖИ ПАКЕТИК ПОД ВЕРХНЮЮ ГУБУ", desc: "Плавно помести за губу. Наслаждайся процессом без лишних движений.", bgColor: "#3E297A" },
        { id: 2, image: secondImg, title: "СМОЧИ СЛЮНОЙ И НЕМНОГО ПОДОЖДИ", desc: "Эффект наступает в течение пары минут, держи до полного насыщения.", bgColor: "#117E43" },
        { id: 3, image: thirdImg, title: "ПОЛУЧАЙ УДОВОЛЬСТВИЕ", desc: "Почувствуй максимальный заряд и прилив сил от премиального вкуса.", bgColor: "#E21A4B" }
    ];

    // Выносим контент группы спонсоров в отдельный JSX-шаблон, чтобы удобно продублировать
    const SponsorsGroup = () => (
        <div className="sponsors-group">
            <img src={creditsFirst} alt="credits-first" className="credits-img" />
            <img src={creditsLogo} alt="credits-logo" className="credits-img" />
            <div className="credits-stacked-block">
                <img src={creditsPortion} alt="credits-portion" className="credits-portion-img" />
                <img src={creditsDescription} alt="credits-description" className="credits-desc-img" />
            </div>
            <div className="credits-qr-wrapper">
                <img src={creditsQrCode} alt="credits-qr-code" className="credits-img-qr" />
            </div>
        </div>
    );

    return (
        <section className="tutorial-section">
            <div className="tutorial-container">
                <h2 className="tutorial-section-title" data-aos="fade-down-right" data-aos-duration="800" data-aos-once="false">
                    КАК ИСПОЛЬЗОВАТЬ?!
                </h2>

                <div className="tutorial-grid">
                    {steps.map((step) => (
                        <TutorialBlock key={step.id} image={step.image} title={step.title} desc={step.desc} bgColor={step.bgColor} />
                    ))}
                </div>
            </div>

            {/* СПОНСОРСКАЯ ЛЕНТА */}
            <div className="tutorial-sponsors-wrapper">
                
                {/* ЛЕНТА С ИЕРОГЛИФАМИ НАД ИКОНКАМИ */}
                <div className="sponsors-top-pattern-line">
                    <img src={creditsOverLine} alt="Credits Top Line" />
                </div>

                {/* Синяя полоса-окно для бесконечной карусели */}
                <div className="sponsors-credits-line-marquee">
                    <div className="sponsors-ticker-track">
                        {/* Рендерим группу дважды для бесшовного эффекта */}
                        <SponsorsGroup />
                        <SponsorsGroup />
                        <SponsorsGroup /> {/* Третий раз на случай очень широких мониторов */}
                    </div>
                </div>
                
                {/* Оранжевая предупреждающая плашка */}
                <div className="sponsors-warning-line">
                    <div className="warning-text-ticker">
                        <span>ЭТО ТАБАЧНОЕ ИЗДЕЛИЕ ВРЕДИТ ВАШЕМУ ЗДОРОВЬЮ • ЭТО ТАБАЧНОЕ ИЗДЕЛИЕ ВРЕДИТ ВАШЕМУ ЗДОРОВЬЮ • ЭТО ТАБАЧНОЕ ИЗДЕЛИЕ ВРЕДИТ ВАШЕМУ ЗДОРОВЬЮ</span>
                    </div>
                </div>
            </div>

            <div className="tutorial-line">
                <img src={Line} alt="Background Line" />
            </div>
        </section>
    );
};

export default TutorialSection;