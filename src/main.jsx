import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// 1. Импортируем стили AOS
import 'aos/dist/aos.css'; 
// 2. Импортируем скрипт AOS
import AOS from 'aos';

// 3. Инициализируем AOS с глобальными настройками
AOS.init({
  duration: 1000, // Длительность анимации (1 секунда)
  once: true,     // Анимация срабатывает только один раз
  easing: 'ease-out-quad', // Тип сглаживания
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)