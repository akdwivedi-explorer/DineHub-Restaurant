import React from 'react'
import style from './NavStyle.module.css'
import logo from './logo.png'

function Nav() {
  return (
    <nav>
        <div>
          <img src={logo} alt="Logo" className={style.logo}/>
        </div>
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Menu</a></li>
            <li><a href='#'>Book a Table</a></li>
            <li><a href='#'>Order Online</a></li>
            <li><a href='#'>Login</a></li>
        </ul>
    </nav>
  )
}

export default Nav