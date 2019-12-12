
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { api_key } from '../config';
import Frame from './Frame';
import Plaque from './Plaque';
import DateChanger from './DateChanger';
import styled from 'styled-components';
import WallBg from '../images/wall.jpg';


const WallWithBG = styled.div`
    height: 100vh;
    background-image: url('${WallBg}');
`;

const Wall = () => {

    const [apod, setApod] = useState(null);
    const [date, setDate] = useState(null);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}${date ? '&date=' + date : ''}`)
            .then(res => setApod(res.data));
        console.log('selected date', date);
    }, [date]);


    return (
        <WallWithBG className="wall">
            {apod && 
            <div className="frame-plaque">
                <Frame imgUrl={apod.url} />
                <Plaque title={apod.title} />
                <DateChanger onChange={setDate} />
            </div>}
        </WallWithBG>
    );
};

export default Wall;
