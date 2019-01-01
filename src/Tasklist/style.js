import styled from 'styled-components';
import { serif } from '../fonts';

import EditableText from '../EditableText';

const grid = 6;
const radius = 3;

export const ListContainer = styled.div`
    margin: ${grid}px;
    display: flex;
    flex-direction: column;

    font-size: 1rem;

    max-height: calc(100vh - 50px - 10em);

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

    box-shadow: 0px 0px ${grid}px rgba(0,0,0,0.3);
    z-index: 1;

    &:hover {
        background-color: #d9fcff;
    }
`;

export const ListHeaderTitle = styled(EditableText)`
    padding: ${grid}px;
    position: relative;

    width: 100%;

    ${serif}
    font-size: 1.4rem;
    font-weight: bold;
    color: #172b4d;
    text-align: center;

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
`

export const ListItems = styled.div`
    background-color: ${({ isDraggingOver }) =>
        isDraggingOver ? '#d9fcff' : 'lightblue'};

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    overflow: hidden scroll;

    padding: 0;

    /* Better top-bottom padding to avoid shrinking */
    &::before, &::after {
        flex-shrink: 0;

        content: '';
        display: inline-block;
        visibility: hidden;
        width: 100%;
        height: ${grid/2}px;
        z-index: 4;
    }

    min-width: 220px;
    min-height: 2rem;

    box-sizing: border-box;

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

    box-shadow: 0px 0px ${grid}px rgba(0,0,0,0.3);
    z-index: 1;
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
    margin: 0;
    padding: 0;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s ease,
                padding 0.05s ease;

    background-color: #add8e6;

    &:hover, &:active {
        background-color: #89c7db;
    }

    &:active {
        padding-top: 0.2rem;
    }
`
