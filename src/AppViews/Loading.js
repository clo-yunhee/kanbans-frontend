import React from 'react';

import styled from 'styled-components';

import LoadingWheel from '../LoadingWheel';

const LoadingContainer = styled.div`
    flex-grow: 1;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Loading = () => (
    <LoadingContainer>
        <LoadingWheel show={true} />
    </LoadingContainer>
)
