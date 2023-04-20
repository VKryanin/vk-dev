import React from 'react';
import logo from './logo.svg'
import style from './Header.module.css'

export function Header({ headerClass }) {
    return (
        <header className={`${style.header} ${headerClass}`}>
            <div className={style.headerWrapper}>
                <img className={style.headerLogo} src={logo} alt="logo VK" />
            </div>
            <div className={style.headerNav}>
                <ol className={style.headerList} start='0'>
                    <li className={style.headerItem}>
                        <a className={style.headerLink} href="#">Обо мне</a>
                    </li>
                    <li className={style.headerItem}>
                        <a className={style.headerLink} href="#">Работы</a>
                    </li>
                    <li className={style.headerItem}>
                        <a className={style.headerLink} href="#">Контакты</a>
                    </li>
                </ol>
                <div className={style.headerResume}>
                    <a href="#">Resume</a>
                </div>
            </div>
        </header>
    )
}