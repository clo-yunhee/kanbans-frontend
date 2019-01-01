import styled from 'styled-components';
import { sans, serif } from '../fonts';

import EditableText from '../EditableText';

const grid = 6;
const radius = 3;

export const ItemContainer = styled.div`
    flex-shrink: 0;

    border-radius: ${radius}px;
    border: 1px solid grey;
    background-color: ${({ isDragging }) =>
        isDragging ? '#b9f4bc' : 'white'};
    box-shadow: ${({ isDragging }) =>
        isDragging ? `2px 2px 1px rgba(0,0,0,0.2)` : 'none'};
    padding: ${grid}px;
    margin: ${grid/2}px ${grid}px;
    user-select: none;

    color: #4d4d4d;
    text-align: left;
    ${serif}

    &:hover,
    &:active {
        color: #4d4d4d;
        text-decoration: none;
    }

    display: flex;
    flex-direction: column;
`;

export const ItemContent = styled(EditableText)`
    width: calc(100% - ${grid}px);
    height: 100%;
    margin-left: ${grid}px;

    min-height: calc(1rem + ${grid}px);
    max-height: 6rem;

    overflow: hidden auto;

    font-size: 0.9rem;
`;

export const ItemFooter = styled.footer`
    ${sans}
    font-size: 0.7rem;

    display: flex;
    flex-direction: column;
    margin: 0;
    margin-top: 5px;
`;


