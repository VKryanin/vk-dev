import style from './AboutSubtitleContainer.module.css'
import rogu from '../../../../image/Rogu.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from 'react';

export function AboutSubtitleContainer() {
    const [showImage, setShowImage] = useState(false);
    const handleMouseOver = () => {
        setShowImage(true);
    }
    const handleMouseOut = () => {
        setShowImage(false);
    }
    useEffect(() => {
        AOS.init({
            duration: 1000, // продолжительность анимации в миллисекундах
            offset: 100, // отступ от верхней части экрана в пикселях
            debounceDelay: 50, // задержка перед запуском анимации
            easing: 'ease-in-out', // тип анимации
            once: true // анимация запускается только один раз
        });
    }, []);

    return (
        <div className={style.aboutSubtitleContainer}>
            <p className={style.aboutSubtitle}>
                Привет, я Виталий. И я увлечен созданием продуктов, которые находятся в интернете.
                Мой путь к веб-разработки, был не очевиден, когда то давно,
                я создавал свои сайты на платформе ucoz, и даже успел поработать тестировщиком.
                Параллельно выбирая язык программирования для изучения и дальнейшего проффесионального роста.
            </p>
            <p className={style.aboutSubtitle}>
                Я разрывался между Python и JavaScript, пока друг не попросил ему сделать ему сайт,
                конечно сайт получился как <span onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Рогу</span>, но это только усилило интерес и стало толчком для старта в роли
                Frontend разработчика.
            </p>
            <img src={rogu} alt="" className={showImage ? style.showImage : style.hideImage} />
            <div className={style.aboutListWrapper}>
                <ul className={style.aboutList}>
                    <p className={style.aboutSubtitle}>
                        Технический стек:
                    </p>
                    <li className={style.aboutItem}>HTML & CSS</li>
                    <li className={style.aboutItem}>JavaScript (ES6+)</li>
                    <li className={style.aboutItem}>React</li>
                </ul>
                <ul className={style.aboutList}>
                    <p className={style.aboutSubtitle}>
                        В планах освоить:
                    </p>
                    <li className={style.aboutItem}>TypeScript</li>
                    <li className={style.aboutItem}>Vue.js</li>
                </ul>
            </div>
        </div>
    )
}