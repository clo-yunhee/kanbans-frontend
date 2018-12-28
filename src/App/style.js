import styled from 'styled-components';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

export const AppContainer = styled.div`
    background-color: #282c34;
    width: 100vw;
    height: 100vh;

    font-size: calc(10px + 2vmin);
    text-align: center;
`;

export const BoardWrapper = styled(PerfectScrollbar)`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    max-width: 100vw;
    max-height: calc(100vh - 50px);
`;
