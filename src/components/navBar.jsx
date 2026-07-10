import React from 'react'
import logo from "../imgs/logo.png"
import "../assets/navBar.css"
const navBar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" className='logo'/>
    </div>
  )
}

export default navBar