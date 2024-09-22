import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCard from "./SwiperCard";
import {historicalDates} from '../../utils/constants'
import {IHistoricalDate} from "../../utils/types";

const Carousel: React.FC<{ currentPeriod:string[] }> = ({currentPeriod}) => {
    const [isMobile, setIsMobile] = useState(false);
    const [currentDates, setCurrentDates] = useState<IHistoricalDate[]>([]);

    // Check window size on resize
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 950);
    };

    useEffect(() => {
        handleResize(); // Check size on mount
        window.addEventListener('resize', handleResize); // Add listener

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup
        };
    }, []);

    useEffect(() => {
        const currentData = historicalDates.filter(item=>item.year>+currentPeriod[0] && item.year<+currentPeriod[1])
        setCurrentDates(currentData)
    }, [currentPeriod]);

    return (
        <>
            <Swiper
                slidesPerView={isMobile?2:3}
                spaceBetween={80}
                navigation={!isMobile} // Use navigation if not mobile
                pagination={isMobile ? { clickable: true } : false}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >

                {currentDates.map((item, index) => {
                    return <SwiperSlide key={index}>
                        <SwiperCard year={item.year} text={item.text}/>
                    </SwiperSlide>
                })}
            </Swiper>
        </>
    );
};

export default Carousel;
