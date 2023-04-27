import React from 'react';
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
        const body = document.querySelector('body');
        const burgerMenu = document.querySelector(`.${style.burgerMenu}`);
        const burgerMenuClose = document.querySelector(`.${style.burgerMenuClose}`)
        const burgerNav = document.querySelector(`.${style.burgerNav}`);

        if (burgerNav.style.visibility === 'visible') {
            body.style.overflow = 'auto';
            burgerNav.style.visibility = 'hidden';
            burgerNav.style.transform = 'translateX(100vw)';
            burgerMenuClose.style.visibility = 'hidden';
            burgerMenu.style.visibility = 'visible';

        } else {
            body.style.overflow = 'hidden';
            burgerNav.style.visibility = 'visible';
            burgerNav.style.transform = 'translateX(0vw)';
            burgerMenuClose.style.visibility = 'visible';
            burgerMenu.style.visibility ='hidden'
        }
    };
    return (
        <div className={style.burgerMenuWrapper}>
            <button onClick={showNav} className={style.burgerMenuButton}>
                <div className={style.burgerMenu}></div>
                <div className={style.burgerMenuClose}></div>
            </button>
            <aside className={style.burgerNav}>
                <nav>
                    <ol start='0'>
                        <li onClick={showNav}>
                            <a href='/about' className={style.headerLink} onClick={(event) => {
                                event.preventDefault();
                                scrollToComponent('about');
                            }}>Обо мне</a>
                        </li>
                        <li onClick={showNav}>
                            <a className={style.headerLink} href="#projects" onClick={(event) => {
                                event.preventDefault();
                                scrollToComponent('projects');
                            }}>Мои проекты</a>
                        </li>
                        <li onClick={showNav}>
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