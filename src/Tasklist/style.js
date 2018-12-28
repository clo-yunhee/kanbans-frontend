import styled from 'styled-components';
import { serif } from '../fonts';

import EditableText from '../EditableText';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const grid = 6;
const radius = 3;

const minWidth = '200px';

const minHeight = `calc(5rem + 2px)`;
const maxHeight = '60vh';

export const ListContainer = styled.div`
    margin: ${grid}px;
    display: flex;
    flex-direction: column;

    font-size: 1rem;

    box-shadow: ${({ isDragging }) =>
        isDragging ? '2px 2px 1px rgba(0,0,0,0.2)' : 'none'};
    border: 1px #282c34 solid;
    border-top-left-radius: ${radius}px;
    border-top-right-radius: ${radius}px;
 `;

export const ListHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top-left-radius: ${radius}px;
    border-top-right-radius: ${radius}px;
    transition: background-color 0.2s ease;
    overflow: hidden;

    background-color: ${({ isDragging }) =>
        isDragging ? '#d9fcff' : 'lightblue'};

    &:hover {
        background-color: #d9fcff;
    }
`;

export const ListHeaderTitle = styled(EditableText)`
    padding: ${grid}px;
    position: relative;

    width: 100%;

    ${serif}
    font-size: 1.5rem;
    font-weight: bold;
    color: #172b4d;

    min-height: 1rem;
`;

export const ListHeaderDrag = styled.span`
    width: 100%;
    height: 1rem;

    transition: background-color 0.2s ease;

    background-color: ${({ isDragging }) =>
        isDragging ? '#89c7db' : '#add8e6'};

    border-bottom: 1px dotted #4d4d4d;

    &:hover {
        background-color: #89c7db;
    }
`;

export const ListScrollContainer = styled(PerfectScrollbar)`
    overflow-x: hidden;
    overflow-y: auto;

    max-height: ${maxHeight};
`;

export const ListItems = styled.div`
    background-color: ${({ isDraggingOver }) =>
        isDraggingOver ? '#d9fcff' : 'lightblue'};
    display: flex;
    flex-direction: column;
    opacity: ${({ isDropDisabled }) =>
        isDropDisabled ? 0.5 : 'inherit'};
    border: ${grid}px;
    padding: ${grid}px;
    padding-bottom: 0;
    transition: background-color 0.2s ease, opacity 0.1s ease;
    user-select: none;

    min-width: ${minWidth};
    min-height: ${minHeight};

    ${serif}
`;
