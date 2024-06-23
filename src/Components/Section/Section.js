import React from 'react'
import adrian from './Mario and Adrian b.jpg'
import style from './SectionStyle.module.css'

function Section() {
  return (
    <>
    <section>
        <div className={style.section}>
            <aside>
                <h2>DineHub</h2>
                <h4>Chicago</h4>
                <p>lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus ut dui a ullamcorper. Vivamus porta, ipsum et sodales blandit, felis felis laoreet nulla, ac lobortis ipsum quam id est. Suspendisse maximus eget sapien eget dignissim. Pellentesque a vestibulum nulla</p>
            </aside>
            <aside>
                <img src={adrian} alt='Adrian and Mario' />
            </aside>
        </div>
    </section>
    </>
  )
}

export default Section