import { WorkItem } from './WorkItem/WorkItem';
import { portfolio } from '../../../../utils/utils';
import style from './WorkList.module.css';

export function WorkList() {
    return (
        <div className={style.workList}>
            {portfolio.map((el, index) => {
                return < WorkItem props={el} key={index}/>
            })}
            
        </div>
    )
}