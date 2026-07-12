import React from 'react'
import logo from "../imgs/logo.png"
import "../assets/navBar.css"

const navBar = () => {
  return (
    <div className='navbar'>
      {/* При клике на логотип скроллит в самый верх к Hero */}
      <a href="#hero">
        <img src={logo} alt="Логотип" className='logo' />
      </a>
      
      <div className="nav-text">
        {/* Ссылки-якоря для перемещения по одной странице */}
        <a href="#about">О КОМПАНИИ</a>
        <a href="#assortment">АССОРТИМЕНТ</a>
        <a href="#advantages">НАШИ ПРЕИМУЩЕСТВА</a>
        <a href="#contacts">КОНТАКТЫ</a>
        <a href="#where-to-buy">ГДЕ КУПИТЬ</a>
      </div>

      <a href="tel:+79522823823" className='tel-number'>+7(952)282-38-23</a>
    </div>
  )
}

export default navBar