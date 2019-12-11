
import React, {useState, useEffect} from 'react';

const DateChanger = (props) => {
    const [dates, setDates] = useState([]);
    
    useEffect(() => {
        let days = [];
        for(let i = 0; i < 7; i++) {
            let d = new Date();
            d.setDate(d.getDate() - i);
            days.push(d);
        }

        setDates(days);
    }, []);

    const formatDate = (date) => {
        // format: 2012-03-14
        return `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}`;
    };

    console.log(dates);
    return (
        <div className="date-changer">
            <select onChange={(e) => props.onChange(e.target.value)}>
                {dates.map(date => <option key={date} value={formatDate(date)}>{date.toDateString()}</option>)}
            </select>
        </div>
    );

};

export default DateChanger;
