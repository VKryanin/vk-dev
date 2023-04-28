import React from 'react';
import logo from './logo.svg'
import style from './Header.module.css'
import { NavBar } from './NavBar/NavBar';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';

export function Header({ headerClass }) {
    return (
        <header className={`${style.header} ${headerClass}`}>
            <a href='#main' className={style.headerWrapper}>
                <img className={style.headerLogo} src={logo} alt="logo VK" />
            </a>
            < NavBar />
            < BurgerMenu />
        </header>
    )
}