import { FC, useEffect, useState } from "react";
import { gsap } from "gsap";
import styles from './styles.module.scss';

const HistoricalDates: FC<{ page: number; setPage: (num: number) => void; dates: Array<string[]> }> = ({ page, setPage, dates }) => {
    const [rotateDegree, setRotateDegree] = useState(0);
    const [fromYear, setFromYear] = useState(dates[0][0]);
    const [toYear, setToYear] = useState(dates[0][1]);

    const onPointClickHandler = (id: number) => {
        setPage(id);
    };

    useEffect(() => {
        setRotateDegree(prevState => prevState + (360 * page));

        const newFromYear = dates[page - 1][0];
        const newToYear = dates[page - 1][1];

        const leftNumberElement = document.querySelector(`.${styles.leftNumber}`);
        const rightNumberElement = document.querySelector(`.${styles.rightNumber}`);

        if (leftNumberElement && rightNumberElement) {
            gsap.fromTo(
                leftNumberElement,
                { innerText: fromYear },
                {
                    innerText: newFromYear,
                    duration: 1,
                    snap: { innerText: 1 },
                    onUpdate: function () {
                        const currentValue = Math.round(this.targets()[0].innerText);
                        this.targets()[0].innerText = currentValue;
                    },
                    onComplete: () => {
                        setFromYear(newFromYear);
                    },
                }
            );

            gsap.fromTo(
                rightNumberElement,
                { innerText: toYear },
                {
                    innerText: newToYear,
                    duration: 1,
                    snap: { innerText: 1 },
                    onUpdate: function () {
                        const currentValue = Math.round(this.targets()[0].innerText);
                        this.targets()[0].innerText = currentValue;
                    },
                    onComplete: () => {
                        setToYear(newToYear);
                    },
                }
            );
        }

    }, [page]);

    return (
        <div className={styles.container}>
            <div
                className={styles.circle}
                style={{ transform: `rotate(${rotateDegree}deg)` }}
            >
                {dates.map((item: string[], index: number) => (
                    <div
                        key={index}
                        onClick={() => onPointClickHandler(index + 1)}
                        className={`${styles.point} ${index + 1 === page ? styles.active : ''}`}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>

            <h2 className={`${styles.dateNumber} ${styles.leftNumber}`}>{fromYear}</h2>
            <h2 className={`${styles.dateNumber} ${styles.rightNumber}`}>{toYear}</h2>
        </div>
    );
};

export default HistoricalDates;
