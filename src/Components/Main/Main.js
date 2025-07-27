import React from 'react'
import style from './MainStyle.module.css'
import salad from './greek salad.jpg'
import bruchetta from './bruchetta.svg'
import dessert from './lemon dessert.jpg'

function Main() {
  return (
    <>
    <main>
        <div className={style.special}>
            <h1>This Week Special !</h1>
            <button>Online Menu</button>
        </div>
        <div className={style.section}>
            <div className={style.item}>
                <img src={salad} alt='Salad'/>
                <div className={style.title}>
                    <h4>Greek Salad</h4>
                    <p>$ 1.24</p>
                </div>
                <p>lorem ass ipsum shn sertg hopehn seide dnjfjf khnaac qwer asd zxc vbnm kjhg lkjf poiu ytghb bghf thrf </p>
                <button>Order a delivery</button>
            </div>
            <div className={style.item}>
            <img src={bruchetta} alt='Bruchetta'/>
                <div className={style.title}>
                    <h4>Brochetta</h4>
                    <p>$ 5.24</p>
                </div>
                <p>lorem ass ipsum shn sertg hopehn seide dnjfjf khnaac qwer asd zxc vbnm kjhg lkjf poiu ytghb bghf thrf </p>
                <button>Order a delivery</button>
            </div>
            <div className={style.item}>
            <img src={dessert} alt='Dessert'/>
                <div className={style.title}>
                    <h4>Lemon Dessert</h4>
                    <p>$ 10.24</p>
                </div>
                <p>lorem ass ipsum shn sertg hopehn seide dnjfjf khnaac qwer asd zxc vbnm kjhg lkjf poiu ytghb bghf thrf </p>
                <button>Order a delivery</button>
            </div>
        </div>
    </main>
    </>
  )
}

export default Main