
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { api_key } from '../config';

const Wall = () => {

    const [apod, setApod] = useState(null);
    const [date, setDate] = useState(null);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
            .then(res => setApod(res.data));
    }, [date]);

    return (
        <div>
            {apod && <img src={apod.url} />}
        </div>
    );
};

export default Wall;