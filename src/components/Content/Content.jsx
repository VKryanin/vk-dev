import React from 'react';
import style from './content.module.css'
import { Main } from "./Main/Main"
import { About } from './About/About'

export function Content() {
    return (
        <div className={style.content}>
            < Main />
            < About />
        </div>

    )
}