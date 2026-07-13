import React from 'react';
import '../assets/contacts.css';
import infoImg from '../imgs/info-img.png';

const ContactsSection = () => {
    return (
        <section className="contacts-section" id="contacts">
            <div className="contacts-container">
                
                <h2 className="contacts-title">КОНТАКТЫ</h2>
                
                <div className="contacts-grid">
                    
                    {/* 1. Форма обратной связи без узоров */}
                    <form className="contacts-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="input-group">
                            <input type="email" placeholder="ПОЧТА" required />
                        </div>
                        
                        <div className="input-group">
                            <input type="text" placeholder="ИМЯ" required />
                        </div>
                        
                        <div className="input-group">
                            <input type="text" placeholder="КОММЕНТАРИЙ" required />
                        </div>
                        
                        <button type="submit" className="submit-btn">ОТПРАВИТЬ</button>
                    </form>

                    {/* 2. Блок с готовой картинкой контактов */}
                    <div className="contacts-info-box">
                        <img src={infoImg} alt="Контакты" className="info-main-img" />
                        <a href="tel:+79522823823" className="hidden-phone-link" title="Позвонить"></a>
                        <a href="mailto:tobacco-spb@yandex.ru" className="hidden-email-link" title="Написать"></a>
                    </div>

                    {/* 3. Блок с картой */}
                    <div className="contacts-map-box">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2003.5593874488344!2d30.384666577386044!3d59.87309997475516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46962f87a3299c8b%3A0x7d6b38c037812f8a!2z0YPQuy4g0JHQtdC70Ysg0JrRg9C90LAsIDMyLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywgMTkyMjM2!5e0!3m2!1sru!2sru!4v1710000000000!5m2!1sru!2sru" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy"
                            title="Map"
                        ></iframe>
                    </div>

                </div>

                {/* ФУТЕР */}
                <footer className="footer-copyright">
                    <p>Общество с ограниченной ответственностью "Афина"</p>
                    <p>ИНН/КПП 7816733929/781601001 ОГРН 1227800115168</p>
                    <p>192236, г. Санкт-Петербург ВН.Тер.Г. Муниципальный округ Волковское, ул Белы Куна, Д 32 Литера М, помещ 76</p>
                    <p>ТЕЛ: +7 (952) 282-38-23</p>
                    <div className="footer-sales">Отдел продаж:</div>
                </footer>

            </div>
        </section>
    );
};

export default ContactsSection;