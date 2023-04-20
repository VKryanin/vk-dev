import { useEffect } from 'react';
import style from './contact.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Contact() {
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
        <section className={style.contact} id='contact' data-aos="fade-up">
            <h2 className={style.contactHeader}>Что дальше?</h2>
            <h2 className={style.contactTitle}>Связаться со мной</h2>
            <p className={style.contactSubtitle}>
                Сейчас я открыт, для  новых возможностей.
                Если у Вас есть вопросы или прочто хотетите сказать "Привет",
                нажимайте на кнопку для отправки сообщения на почту
                или слева есть список контактов со мной.
            </p>
            <a className={style.contactMail} href="mailto:krianinvv@internet.ru">Привет</a>
        </section>
    )
}