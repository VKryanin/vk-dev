import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import style from './BurgerMenu.module.css'

export function BurgerMenu() {
    const scrollToComponent = id => {
        const component = document.getElementById(id);
        window.scrollTo({
            top: component.offsetTop,
            behavior: 'smooth'
        });
    };
    const showNav = () => {
        const burgerNav = document.querySelector(`.${style.burgerNav}`);
        if (burgerNav.style.visibility === 'visible') {
            burgerNav.style.visibility = 'hidden';
            burgerNav.style.transform = 'translateX(100vw)'
        } else {
            burgerNav.style.visibility = 'visible';
            burgerNav.style.transform = 'translateX(0vw)';
        }
    };
    return (
        <div className={style.burgerMenuWrapper}>
            <button onClick={showNav} className={style.burgerMenuButton}>
                <div className={style.burgerMenu}></div>
            </button>
            <aside className={style.burgerNav}>
                <nav>
                    <ol start='0'>
                        <li >
                            <a href='/about' className={style.headerLink} onClick={(event) => {
                                event.preventDefault();
                                scrollToComponent('about');
                            }}>Обо мне</a>
                        </li>
                        <li>
                            <a className={style.headerLink} href="#projects" onClick={(event) => {
                                event.preventDefault();
                                scrollToComponent('projects');
                            }}>Мои проекты</a>
                        </li>
                        <li>
                            <a className={style.headerLink} href="#contact" onClick={(event) => {
                                event.preventDefault();
                                scrollToComponent('contact');
                            }}>Связаться со мной</a>
                        </li>
                    </ol>
                    <div className={style.headerResume}>
                        <a href="#">Resume</a>
                    </div>
                </nav>
            </aside>
        </div>
    )
}