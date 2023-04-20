import React from 'react';
import logo from './logo.svg'
import style from './Header.module.css'

export function Header({ headerClass }) {
    const scrollToComponent = id => {
        const component = document.getElementById(id);
        window.scrollTo({
            top: component.offsetTop,
            behavior: 'smooth'
        });
    };
    return (
        <header className={`${style.header} ${headerClass}`}>
            <div className={style.headerWrapper}>
                <img className={style.headerLogo} src={logo} alt="logo VK" />
            </div>
            <nav className={style.headerNav}>
                <ol className={style.headerList} start='0'>
                    <li className={style.headerItem}>
                        <a className={style.headerLink} href="#about" onClick={(event) => {
                            event.preventDefault();
                            scrollToComponent('about');
                        }}>Обо мне</a>
                    </li>
                    <li className={style.headerItem}>
                        <a className={style.headerLink} href="#projects" onClick={(event) => {
                            event.preventDefault();
                            scrollToComponent('projects');
                        }}>Мои проекты</a>
                    </li>
                    <li className={style.headerItem}>
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
        </header>
    )
}