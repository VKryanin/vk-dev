import React from 'react';
import style from './WorkItem.module.css';
import mesto from '../../../../image/mesto.jpg'

export function WorkItem({ props }) {
    return (
        <div className={style.workItem}>
            <a className={style.workLink}
                rel='noopener noreferrer'
                href={props.link}
                target='_blank'>
                <img className={style.workImage} src={mesto} alt="mesto" />
                <span className={style.workBlur}></span>
            </a>
            <div className={style.workContent}>
                <p className={style.workOverLine}>{props.type}</p>
                <h3 className={style.workProjectName}>
                    <a rel='noopener noreferrer'
                        href={props.link}
                        target='_blank'>
                        {props.name}
                    </a>
                </h3>
                <div className={style.workDescription}>
                    <p className={style.workText}>
                        {props.description}
                    </p>
                </div>
                <ul className={style.workTechList}>
                    {props.tech.map((item, index) => {
                        return <li key={index}>{item}</li>
                    }
                    )}
                </ul>
                <a href={props.link} target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                        <title>External Link</title>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>
            </div>
        </div>
    )
}