
import style from './AboutGrid.module.css';
import { AboutSubtitleContainer } from './AboutSubtitleContainer/AboutSubtitleContainer';
import { AboutPhotoWrapper } from './AboutPhotoWrapper/AboutPhotoWrapper';

export function AboutGrid() {
    return (
        <div className={style.aboutGrid}>
            < AboutSubtitleContainer />
            < AboutPhotoWrapper />
        </div>
    )
}