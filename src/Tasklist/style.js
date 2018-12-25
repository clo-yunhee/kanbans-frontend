import styled from 'styled-components';

import EditableText from '../EditableText';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const listWidth = '200px';
const listHeight = '300px';
const grid = 6;
const radius = 3;

export const ListContainer = styled.div`
    margin: ${grid}px;
    display : flex;
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
    max-height: ${listHeight};

    padding-bottom: ${grid}px;
`;

export const ListItems = styled.div`
    background-color: ${({ isDraggingOver }) =>
        isDraggingOver ? '#d9fcff' : 'lightblue'};
    display: flex;
    flex-direction: column;
    opacity: ${({ isDropDisabled }) =>
        isDropDisabled ? 0.5 : 'inherit'};
    padding: ${grid}px;
    border: ${grid}px;
    padding-bottom: 0;
    transition: background-color 0.1s ease, opacity 0.1s ease;
    user-select: none;
    min-width: ${listWidth};

    min-height: ${listHeight};
`;
