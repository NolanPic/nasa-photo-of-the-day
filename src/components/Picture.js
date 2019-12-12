
import React from 'react';
import styled from 'styled-components';
import { Center } from '../styles'

const Image = styled.img`
    border:solid 2px;
    border-bottom-color:#ffe;
    border-left-color:#eed;
    border-right-color:#eed;
    border-top-color:#ccb;
    width: 700px;
    max-height:100%;
    max-width:100%;
`;

const Picture = ({ imgUrl }) => {
    return imgUrl
        ? (
        <Center>
            <Image src={imgUrl} alt="NASA image of the day" />
        </Center>
        )
        : null;
};

export default Picture;