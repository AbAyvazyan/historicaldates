import React from "react";
import { SwiperSlide } from "swiper/react"; // Import both Swiper and SwiperSlide
import '../styles.css'
import styles from './styles.module.scss'

const SwiperCard: React.FC<{year:number,text:string}> = ({year,text}) => {
    return (
            <div className={styles.swiperCard}>
                <h3>{year}</h3>
                <p>{text}</p>
            </div>
    );
};

export default SwiperCard;
