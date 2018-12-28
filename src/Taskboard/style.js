import styled from 'styled-components';
import { sans, serif } from '../fonts';

import EditableText from '../EditableText';

const grid = 10;

export const BoardContainer = styled.div`
    height ${({ height }) => height};
    overflow-x: hidden;
    overflow-y: auto;

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
    ${sans}
`;

