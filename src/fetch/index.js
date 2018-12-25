import req from './makeRequest';

export const fetchBoard = req('board',
    (boardId) =>
        `api/get/${boardId}`
);

export const fetchList = req('list',
    (boardId, listId) =>
        `api/get/${boardId}/${listId}`
);

export const fetchItem = req('item',
    (boardId, listId, itemId) =>
        `api/get/${boardId}/${listId}/${itemId}`
);
