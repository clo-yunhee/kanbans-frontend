import styled from 'styled-components';

export const AppContainer = styled.div`
    background-color: #282c34;
    width: 100vw;
    height: 100vh;

    font-size: calc(10px + 2vmin);
    text-align: center;
`;

export const BodyWrapper = styled.div`
    display: flex;
    flex-direction: row;
    color: white;

    justify-content: stretch;

    width: 100vw;
    height: calc(100vh - 50px);

    overflow: auto;
`;
