import React, {useState} from "react";
import RootContainer from "./Containers/RootContainer";
import HistoricalDates from "./Components/HistoricalDates";
import Carousel from "./Components/Carousel";

const dates = [['1992','1995'],['1995','1999'],['1999','2003'],['2003','2010'],['2010','2015'],['2015','2022']]


const App = () =>{
const [page,setPage] = useState(6);
    return (
        <RootContainer page={page} setPage={setPage} maxCount={dates.length}>
            <HistoricalDates page={page} setPage={setPage} dates={dates}/>
            <Carousel currentPeriod = {dates[page-1]}/>
        </RootContainer>
    )
}

export default App;
