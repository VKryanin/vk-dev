import style from './main.module.css'
import Typewriter from 'typewriter-effect';

export function Main() {
    return (
        <section className={style.main} id='main'>
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
            <h3 className={style.mainAbout}>Воплощаю идеи в&nbsp;жизнь с&nbsp;помощью кода!</h3>
            <p className={style.mainSubtitle}>Я frontend разработчик, специализирующийся на&nbsp;создании веб-сервисов и приложений.</p>
        </section>
    )
}




