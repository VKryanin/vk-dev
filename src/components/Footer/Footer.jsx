import style from './Footer.module.css'
import { FooterLinks } from './FooterLinks/FooterLinks'

export function Footer() {
    return (
        <footer className={style.footer}>
            < FooterLinks/>
            <h4 className={style.footerTitle}>Сделано в 2023 году</h4>
            <p className={style.footerText}>Виталий Крянин</p>
        </footer>
    )
}