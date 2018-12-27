import styled from 'styled-components';

const grid = 10;

export const AppContainer = styled.div`
    background-color: #282c34;
    width: 100vw;
    height: 100vh;

    text-align: center;
`;

export const BoardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: calc(10px + 2vmin);
    color: white;

    height: calc(100vh - 50px);
    overflow: auto;
`;
