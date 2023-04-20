import React, { useState } from 'react';
import photo from '../../image/photo.jpg'
import rogu from '../../image/Rogu.jpg'
import style from './about.module.css'

export function About() {
    const [showImage, setShowImage] = useState(false);
    const handleMouseOver = () => {
        setShowImage(true);
    }

    const handleMouseOut = () => {
        setShowImage(false);
    }
    return (
            <section className={style.about}>
                <h2 className={style.aboutTitle}> Обо мне</h2>
                <div className={style.aboutGrid}>
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
                    <div className={style.aboutPhotoWrapper}>
                        <div className={style.imageWrapper}>
                            <img src={photo} alt="" />
                            <span className={style.aboutSpan}></span>
                        </div>
                        <div className={style.aboutBorder}></div>
                    </div>
                </div>


            </section>
    )
}