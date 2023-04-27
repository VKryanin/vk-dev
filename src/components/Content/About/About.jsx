

import style from './about.module.css'

import { AboutGrid } from './AboutGrid/AboutGrid';

export function About() {
    return (
        <section className={style.about} id='about' data-aos="fade-up">
            <h2 className={style.aboutTitle}> Обо мне</h2>
            <AboutGrid/>
        </section>
    )
}