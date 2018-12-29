import styled from 'styled-components';
import { serif } from '../fonts';

import EditableText from '../EditableText';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const grid = 6;
const radius = 3;

export const ListContainer = styled.div`
    margin: ${grid}px;
    display: flex;
    flex-direction: column;

    font-size: 1rem;

    box-sizing: border-box;
    box-shadow: ${({ isDragging }) =>
        isDragging ? '2px 2px 1px rgba(0,0,0,0.2)' : 'none'};
    border: 1px #282c34 solid;
    border-top-left-radius: ${radius}px;
    border-top-right-radius: ${radius}px;
 `;

export const ListHeader = styled.header`
    flex-grow: 0;
    flex-shrink: 0;

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

export const ListHeaderDrag = styled.div.attrs({
    title: "Move list"
})`
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

export const ListItems = styled(PerfectScrollbar)`
    overflow-x: hidden;
    overflow-y: auto;

    background-color: ${({ isDraggingOver }) =>
        isDraggingOver ? '#d9fcff' : 'lightblue'};

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    padding: ${grid/2}px ${grid}px;
    min-width: 180px;
    min-height: 2rem;

    box-shadow: inset 0px ${grid/2}px ${grid/2}px rgba(0,0,0,0.12),
                inset 0px -${grid/2}px ${grid/2}px rgba(0,0,0,0.12);

    opacity: ${({ isDropDisabled }) =>
        isDropDisabled ? 0.5 : 'inherit'};
    transition: background-color 0.2s ease,
                opacity 0.1s ease;
    user-select: none;

    ${serif}
`;

export const ListFooter = styled.div`
    flex-grow: 0;
    flex-shrink: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ListFooterNewItem = styled.button.attrs({
    children: "+",
    title: "Add new item"
})`
    display: flex;
    width: 100%;
    height: 1.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    color: #3c3c3c;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s ease;

    background-color: #add8e6;

    &:hover, &:active {
        background-color: #89c7db;
    }
`
