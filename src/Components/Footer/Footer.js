import React from "react";
import { Link } from 'react-router-dom';
import style from "./FooterStyle.module.css";
import logo from "./logo.png";

function Footer() {
  return (
    <>
      <footer>
        <div className={style.colored}>
          <div className={style.content}>
            <aside>
              <img src={logo} alt="DineHub" />
            </aside>
            <aside>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/book">Book a Table</Link>
                </li>
                <li>
                  <Link to="/order">Order Online</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
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
  );
}

export default Footer;
