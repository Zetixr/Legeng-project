import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// 1. Импортируем стили AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 800,   // Скорость анимации (в миллисекундах)
  once: false,     // МАНЕВР: анимация будет проигрываться КАЖДЫЙ РАЗ при скролле вверх и вниз
  mirror: true, 
  easing: 'ease-out-quad'   // Включает анимацию элементов при скролле мимо них в обратную сторону
});

// 3. Инициализируем AOS с глобальными настройками


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)