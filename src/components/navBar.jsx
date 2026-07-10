import React from 'react'
import logo from "../imgs/logo.png"
import "../assets/navBar.css"
const navBar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo' />
      <div className="nav-text">
        <a href="">О КОМПАНИИ</a>
        <a href="">АССОРТИМЕНТ</a>
        <a href="">КАК ИСПОЛЬЗОВАТЬ</a>
        <a href="">КОНТАКТЫ</a>
        <a href="">ГДЕ КУПИТЬ</a>
      </div>
      <a href="" className='tel-number'>+7(952)282-28-23</a>
    </div>
  )
}

export default navBar