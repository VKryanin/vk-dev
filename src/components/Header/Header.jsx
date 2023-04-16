import logo from './logo.svg'
import style from './Header.module.css'

export function Header() {
    return (
        <header className={style.header}>
            <div className={style.headerWrapper}>
                <img className={style.headerLogo} src={logo} alt="logo VK" />
            </div>
            <div className={style.headerNav}>
                <ol className={style.headerList} start='0'>
                    <li className={style.headerItem}>
                        <a className={style.headerLink} href="#">About</a>
                    </li>
                    <li className={style.headerItem}>
                        <a className={style.headerLink} href="#">Work</a>
                    </li>
                    <li className={style.headerItem}>
                        <a className={style.headerLink} href="#">Contact</a>
                    </li>
                </ol>
                <div className={style.headerResume}>
                    <a href="#">Resume</a>
                </div>
            </div>
        </header>
    )
}