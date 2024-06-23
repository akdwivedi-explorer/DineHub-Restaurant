import React from 'react'
import style from './ArticleStyle.module.css'

function Article() {
  return (
    <>
    <article>
        <h2>Testimonials</h2>
        <div className={style.section}>
            <div className={style.items}></div>
            <div className={style.items}></div>
            <div className={style.items}></div>
            <div className={style.items}></div>
        </div>
    </article>
    </>
  )
}

export default Article