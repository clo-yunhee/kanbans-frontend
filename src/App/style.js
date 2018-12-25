import styled from 'styled-components';

const grid = 10;

export const AppContainer = styled.div`
    background-color: #282c34;
    text-align: center;
    min-height: 100vh;
`;

export const BoardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;
