import { BrowserRouter as Router, Link } from 'react-router-dom';

import style from './NavBar.module.css'

export function NavBar() {
    const scrollToComponent = id => {
        const component = document.getElementById(id);
        window.scrollTo({
            top: component.offsetTop,
            behavior: 'smooth'
        });
    };
    return (
        <nav className={style.headerNav}>
            <ol className={style.headerList} start='0'>
                <li className={style.headerItem}>
                    <a href="#about" className={style.headerLink}
                        onClick={(event) => {
                            event.preventDefault();
                            scrollToComponent('about');
                        }}
                    >Обо мне</a>
                </li>
                <li className={style.headerItem}>
                    <a href="#projects" className={style.headerLink}
                        onClick={(event) => {
                            event.preventDefault();
                            scrollToComponent('projects');
                        }}
                    >Мои проекты</a>
                </li>
                <li className={style.headerItem}>
                    <a href="#contact" className={style.headerLink}
                        onClick={(event) => {
                            event.preventDefault();
                            scrollToComponent('contact');
                        }}>Связаться со мной</a>
                </li>
            </ol>
            <div className={style.headerResume}>
                <a href="#">Resume</a>
            </div>
        </nav>
    )
}