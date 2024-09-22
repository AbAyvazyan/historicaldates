import { FC, ReactNode } from "react";
import styles from './styles.module.scss';

const RootContainer: FC<{ children: ReactNode,page:number,setPage:(num:number)=>void,maxCount:number }> = ({ children,page,setPage,maxCount }) => {
    const onNextCLickHandler = ()=>{
        if(page===maxCount){
            return
        }
        setPage(page+1)
    }
    const onBeforCLickHandler = ()=>{
        if(page===1){
            return
        }
        setPage(page-1)
    }
    return (
        <section className={styles.rootSection}>
            <div className={styles.absoluteTitle}>
                <div className={styles.vector}></div>
                <h1>Исторические даты</h1>
            </div>
            {children}
            <div className={styles.horizontalLine}></div>
            <div className={styles.verticalLine}></div>
            <div className={styles.controllerPart}>
                <p>0{page}/0{maxCount}</p>
                <div className={styles.controllerButtonHolder}>
                    <div onClick={onBeforCLickHandler} className={styles.controllerButton}> {"<"} </div>
                    <div onClick={onNextCLickHandler} className={styles.controllerButton}> {">"} </div>
                </div>
            </div>
        </section>
    );
}

export default RootContainer;
