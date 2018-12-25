import styled from 'styled-components';

import EditableText from '../EditableText';

const grid = 6;
const radius = 3;

export const ItemContainer = styled.div`
    border-radius: ${radius}px;
    border: 1px solid grey;
    background-color: ${({ isDragging }) =>
        isDragging ? '#b9f4bc' : 'white'};
    box-shadow: ${({ isDragging }) =>
        isDragging ? `2px 2px 1px rgba(0,0,0,0.2)` : 'none'};
    padding: ${grid}px;
    min-height: 40px;
    margin-bottom: ${grid}px;
    user-select: none;

    color: #4d4d4d;
    text-align: left;

    font-size: 1rem;

    &:hover,
    &:active {
        color: #4d4d4d;
        text-decoration: none;
    }

    display: flex;
    flex-direction: column;
`;

export const ItemContent = styled(EditableText)`
    flex-grow: 1;
    flex-basis: 100%;

    padding-left: ${grid}px;

    min-height: 1rem;
`;

export const ItemFooter = styled.footer`
    font-size: 0.75rem;

    display: flex;
    flex-direction: column;
    margin: 0;
    margin-top: 5px;
`;

