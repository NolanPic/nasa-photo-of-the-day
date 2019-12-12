
import React from 'react';
import Picture from './Picture';
import styled from 'styled-components';

// blatantly taken from https://codepen.io/chris22smith/pen/PbBwjp
const FrameWrap = styled.div`
    display: grid;
    background-color:#ddc;
    border:solid 5vmin #eee;
    border-bottom-color:#fff;
    border-left-color:#eee;
    border-radius:2px;
    border-right-color:#eee;
    border-top-color:#ddd;
    box-shadow:0 0 5px 0 rgba(0,0,0,.25) inset, 0 5px 10px 5px rgba(0,0,0,.25);
    box-sizing:border-box;
    margin:5vh 10vw;
    margin-bottom: 3vh;
    height:80vh;
    padding:8vmin;
    position:relative;
    text-align:center;

    &:before {
        border-radius:2px;
        bottom:-2vmin;
        box-shadow:0 2px 5px 0 rgba(0,0,0,.25) inset;
        content:"";
        left:-2vmin;
        position:absolute;
        right:-2vmin;
        top:-2vmin;
    }
    
    &:after {
        border-radius:2px;
        bottom:-2.5vmin;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,.25);
        content:"";
        left:-2.5vmin;
        position:absolute;
        right:-2.5vmin;
        top:-2.5vmin;
    }
`;

const Frame = ({ imgUrl }) => {
    return (
        <FrameWrap>
            <Picture imgUrl={imgUrl} />
        </FrameWrap>
    );
}

export default Frame;