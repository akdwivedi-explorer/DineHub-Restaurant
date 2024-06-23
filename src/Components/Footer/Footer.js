import React from 'react'
import style from './FooterStyle.module.css'
import logo from './logo.png'

function Footer() {
  return (
    <>
    <footer>
        <div className={style.colored}>
            <div className={style.content}>
                <aside>
                    <img src={logo} alt='DineHub'/>
                </aside>
                <aside>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Menu</a></li>
                        <li><a href='#'>Book a table</a></li>
                        <li><a href='#'>Order Online</a></li>
                        <li><a href='#'>Login</a></li>
                    </ul>
                </aside>
                <aside>
                    <h4>Contact</h4>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </aside>
                <aside>
                    <h4>Social Media Links</h4>
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                </aside>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer