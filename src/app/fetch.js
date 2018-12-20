import { requestGET, defaultHost } from './ajax';

function makeRequest(name, urlBuilder) {
    return function(callback, ...args) {
        let url = defaultHost + urlBuilder(args);

        requestGET(url, data => {
            if (data.error) {
                console.error(`Fetching ${name} error: ${data.msg}`);
                return;
            }

            callback(data.res);
        });
    }
}

export const fetchBoard = makeRequest('board', (boardId) =>
                            `/api/get/${boardId}`);
//                            `/api/get_board.php?boardId=${boardId}`);

export const fetchList = makeRequest('list', (boardId, listId) =>
                           `/api/get/${boardId}/${listId}`);
//                           `/api/get_list.php?boardId=${boardId}&&listId=${listId}`);

export const fetchItem = makeRequest('item', (boardId, listId, itemId) =>
                           `/api/get/${boardId}/${listId}/${itemId}`);
//                           `/api/get_item.php?boardId=${boardId}&&listId=${listId}&&itemId=${itemId}`);
