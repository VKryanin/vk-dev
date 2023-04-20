import React, {useEffect} from 'react';
import style from './content.module.css';
import { Main } from "./Main/Main";
import { About } from './About/About';
import { Work } from './Work/Work';
import { Contact } from './Contact/Contact';

export function Content() {
    return (
        <div className={style.content}>
            < Main data-aos="fade-up" />
            < About data-aos="fade-up" />
            < Work data-aos="fade-up" />
            < Contact data-aos="fade-up" />
        </div>
    )
}