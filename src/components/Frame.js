
import React from 'react';
import Picture from './Picture';

const Frame = ({ imgUrl }) => {
    return (
        <div className="frame">
            <Picture imgUrl={imgUrl} />
        </div>
    );
}

export default Frame;