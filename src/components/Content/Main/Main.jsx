import style from './main.module.css'
import Typewriter from 'typewriter-effect';

export function Main() {
    return (
        <section className={style.main}>
            <h1 className={style.mainTitle}>
                <Typewriter
                    options={{cursor: '_'}}
                        onInit={(typewriter) => {
                    typewriter.typeString('Ghbdtn')
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString('Привет, меня зовут')
                        .start();
                    }}
                />
            </h1>
            <h2 className={style.mainMyName}>Виталий Крянин</h2>
            <h3 className={style.mainAbout}>Воплощаю идеи в жизнь с помощью кода!</h3>
            <p className={style.mainSubtitle}>Я frontend разработчик, специализирующийся на разработке веб-сервисов и приложений для пользователей.</p>
        </section>
    )
}




