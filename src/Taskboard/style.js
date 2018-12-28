import styled from 'styled-components';
import { serif } from '../fonts';

import EditableText from '../EditableText';

const grid = 10;

export const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    margin: 0;
    padding: 0;

    font-size: 1rem;
`;

export const BoardHeader = styled.header`
`;

export const BoardHeaderTitle = styled(EditableText)`
    ${serif}
    font-size: 2rem;
    margin-top: ${grid}px;
`;

export const BoardLists = styled.div`
    margin: ${grid}px;
    display: flex;
    justify-content: center;
`;

