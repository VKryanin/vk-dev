import style from './AboutPhotoWrapper.module.css';
import photo from '../../../../image/photo.jpg'

export function AboutPhotoWrapper() {
    return (
        <div className={style.aboutPhotoWrapper}>
            <div className={style.imageWrapper}>
                <img src={photo} alt="personal photo" />
                <span className={style.aboutSpan}></span>
            </div>
            <div className={style.aboutBorder}></div>
        </div>
    )
}