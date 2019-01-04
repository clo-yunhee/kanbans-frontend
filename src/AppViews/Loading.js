import React from 'react';

import styled from 'styled-components';

import LoadingWheel from '../LoadingWheel';

const LoadingContainer = styled.div`
    flex-grow: 1;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export class Loading extends React.Component {
    render() {
        return (
            <LoadingContainer>
                <LoadingWheel show={true} />
            </LoadingContainer>
        )
    }
}
