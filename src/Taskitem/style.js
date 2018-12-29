import styled from 'styled-components';
import { sans, serif } from '../fonts';

import EditableText from '../EditableText';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

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
    margin-top: ${grid/2}px;
    margin-bottom: ${grid/2}px;
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

export const ItemContentScroll = styled(PerfectScrollbar)`
    overflow: hidden;
    min-height: calc(1rem + ${grid}px);
    max-height: 6rem;
`;

export const ItemContent = styled(EditableText)`
    padding-left: ${grid}px;
`;

export const ItemFooter = styled.footer`
    ${sans}
    font-size: 0.75rem;

    display: flex;
    flex-direction: column;
    margin: 0;
    margin-top: 5px;
`;


