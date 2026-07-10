import React, { useState, useEffect } from 'react';
import '../assets/AgeGate.css';

const AgeGate = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isTooYoung, setIsTooYoung] = useState(false);

    useEffect(() => {
        // Для постоянного отображения при верстке замените логику ниже на setIsVisible(true);
        const isAdult = localStorage.getItem('isAdult');
        if (!isAdult) {
            setIsVisible(true);
        }
    }, []);
    useEffect(() => {
        // ВРЕМЕННО: убираем все проверки, чтобы окно появлялось всегда
        setIsVisible(true);
    }, []);

    const handleConfirm = () => {
        localStorage.setItem('isAdult', 'true');
        setIsVisible(false);
    };

    const handleReject = () => {
        setIsTooYoung(true);
    };

    if (!isVisible) return null;

    return (
        <div className="age-gate-overlay">
            <div className="age-gate-container">

                {!isTooYoung ? (
                    /* --- ЭКРАН ПРОВЕРКИ --- */
                    <div className="age-gate-content">
                        <h1 className="age-gate-title">ТЕБЕ БОЛЬШЕ 18, ВОИН?!</h1>

                        <div className="age-gate-text-block">
                            <p className="age-gate-subtitle">
                                ЗАКОНОДАТЕЛЬСТВО РФ ЗАПРЕЩАЕТ ДЕМОНСТРАЦИЮ И ПРОДАЖУ ТАБАЧНЫХ ИЗДЕЛИЙ НЕСОВЕРШЕННОЛЕТНИМ ЛИЦАМ.
                            </p>
                            <p className="age-gate-description">
                                НАЖИМАЯ КНОПКУ "ДА", ВЫ ПОДТВЕРЖДАЕТЕ, ЧТО ВАМ ИСПОЛНИЛОСЬ 18 ИЛИ БОЛЕЕ ЛЕТ И СОГЛАШАЕТЕСЬ ПРОСМАТРИВАТЬ ВИЗУАЛЬНЫЕ МАТЕРИАЛЫ НА САЙТЕ.
                            </p>
                        </div>

                        <div className="age-gate-buttons">
                            <button className="btn-greek btn-no" onClick={handleReject}>
                                НЕТ <span className="greek-pattern">回</span>
                            </button>
                            <button className="btn-greek btn-yes" onClick={handleConfirm}>
                                ДА <span className="greek-pattern">回</span>
                            </button>
                        </div>
                    </div>
                ) : (
                    /* --- ЭКРАН ОТКАЗА --- */
                    <div className="age-gate-content age-gate-denied animate-fade-in">
                        <h1 className="age-gate-title">ТЫ ЕЩЕ СЛИШКОМ ЮН ДЛЯ ЭТИХ АРЕН!</h1>

                        <div className="age-gate-text-block">
                            <p className="age-gate-subtitle">
                                Подрасти, наберись сил в Спарте, и возвращайся, когда ГЕФЕСТ скует твой паспорт.
                            </p>
                        </div>

                        <div className="age-gate-buttons">
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="btn-greek btn-redirect">
                                В ДЕТСКИЙ САД <span className="greek-pattern">⏃</span>
                            </a>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default AgeGate;