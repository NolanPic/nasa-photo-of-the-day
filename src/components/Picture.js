
import React from 'react';

const Picture = ({ imgUrl }) => {
    return imgUrl
        ? (
        <div className="picture">
            <img src={imgUrl} alt="NASA image of the day" />
        </div>
        )
        : null;
};

export default Picture;