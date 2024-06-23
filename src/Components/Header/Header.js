import React from 'react'
import style from './HeaderStyle.module.css'
import restauranfood from './restauranfood.jpg'

function Header() {
  return (
    <>
    <header>
        <div className={style.colored}>
            <div className={style.main}>
                <h1>DineHub</h1>
                <h3>Chicago</h3>
                <p>lorem ipsum edit hghb sisf name ihgfd ghfe jhgt asgu huyt fjfj jhsdf jdbufbe djefb efgf qalagd eetquobc efgfv efygfgv e eufg eqogef efgfboq qwgde dpuipw eubcJNCU UGhru uefgbf eufgef.</p>
                <button>Reserve a Table</button>
            </div>
        </div>
        <img src={restauranfood} />
    </header>
    </>
  )
}

export default Header