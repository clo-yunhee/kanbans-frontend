import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const data = {
    _id: 'board0',
    boardName: 'Board Name',

    lists: [
        {
            _id: 'list0',
            listName: 'List 1',

            items: [
                {
                    _id: 'item0',
                    content: 'Item 1',
                    listIndex: 0,
                    createdOn: 1544862542,
                    updatedOn: null,
                },
                {
                    _id: 'item1',
                    content: 'Item 2',
                    listIndex: 1,
                    createdOn: 1544862544,
                    updatedOn: null,
                },
            ],
        },
        {
            _id: 'list1',
            listName: 'List 2',

            items: [
                {
                    _id: 'item2',
                    content: 'Item 3',
                    listIndex: 0,
                    createdOn: 1544862550,
                    updatedOn: null,
                },
            ],
        },
    ],
};

ReactDOM.render(<App data={data} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
