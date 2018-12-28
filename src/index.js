import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import JavascriptTimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

JavascriptTimeAgo.locale(en);

ReactDOM.render(<App />, document.getElementById('root'));

/*
const data = {
    _id: 'board0',
    boardName: 'Board Name',

    lists: [
        {
            _id: 'list0',
            boardId: 'board0',
            listName: 'List 1',
            columnIndex: 0,

            items: [
                {
                    _id: 'item0',
                    listId: 'list0',
                    boardId: 'board0',
                    content: 'Item 1',
                    listIndex: 0,
                    createdOn: 1544862542,
                    updatedOn: (Date.now() / 1000) - 44,
                },
                {
                    _id: 'item1',
                    listId: 'list0',
                    boardId: 'board0',
                    content: 'Item 2',
                    listIndex: 1,
                    createdOn: 1544862544,
                    updatedOn: null,
                },
            ],
        },
        {
            _id: 'list1',
            boardId: 'board0',
            listName: 'List 2',
            columnIndex: 1,

            items: [
                {
                    _id: 'item2',
                    listId: 'list1',
                    boardId: 'board0',
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
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
