
import React from 'react';
import styled from 'styled-components';

const PlaqueWrap = styled.div`
    display: grid;
    place-items: center;
    background-color: #C9B248;
    padding: 0.5rem 3rem;
    margin-bottom: 3rem;
    border-radius: 5%;
    box-shadow:0 0 2px 0 rgba(0,0,0,.25) inset, 0 2px 10px 2px rgba(0,0,0,.25);

    p {
        font-size: 1.8rem;
        color: #4D441A;
        font-weight: bold;
    }
`;

const Plaque = ({ title }) => {
    return (
        <PlaqueWrap>
            <p>{title}</p>
        </PlaqueWrap>
    );
};

export default Plaque;
