import styled from 'styled-components';
import { serif } from '../fonts';

import EditableText from '../EditableText';

const grid = 10;

export const BoardContainer = styled.div`
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    color: white;

    margin: 0;
    padding: 0;

    font-size: 1rem;
`;

export const BoardHeader = styled.header`
    width: 100%;
`;

export const BoardHeaderTitle = styled(EditableText)`
    ${serif}
    font-size: 2rem;
    margin-top: ${grid}px;
    text-align: center;
`;

export const BoardLists = styled.div`
    margin: ${grid}px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`;
