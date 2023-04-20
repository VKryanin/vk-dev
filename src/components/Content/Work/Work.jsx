import { useEffect } from 'react';
import style from './work.module.css'
import mesto from '../../image/mesto.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Work() {
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
        <section className={style.work} id='projects' data-aos="fade-up">
            <h2 className={style.workTitle}>Мои проекты</h2>
            <ul className={style.workList}>
                <li className={style.workItem}>
                    <a className={style.workLink}
                        rel='noopener noreferrer'
                        href="https://vkryanin.github.io/mesto/"
                        target='_blank'>
                        <img className={style.workImage} src={mesto} alt="mesto" />
                        <span className={style.workBlur}></span>
                    </a>
                    <div className={style.workContent}>
                        <p className={style.workOverLine}>Учебный проект</p>
                        <h3 className={style.workProjectName}>
                            <a rel='noopener noreferrer'
                                href="https://vkryanin.github.io/mesto/"
                                target='_blank'>
                                Mesto
                            </a>
                        </h3>
                        <div className={style.workDescription}>
                            <p className={style.workText}>
                                Проект выполнен в рамках обучения.
                                Через API выполняется получение фото карточки, кол-ва лайков,
                                так же реализована возожность, добавления новой карточки, ставить/убирать лайк
                                и удалять карточку.
                            </p>
                        </div>
                        <ul className={style.workTechList}>
                            <li>React</li>
                            <li>React hooks</li>
                            <li>API</li>
                            <li>BEM</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </section>

    )
}