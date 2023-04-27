import { useEffect } from 'react';
import style from './work.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { WorkList } from './WorkList/WorkList';

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
            < WorkList/>
        </section>

    )
}