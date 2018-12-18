import { requestGET } from './ajax.js';

const host = 'http://localhost/';

function makeRequest(urlBuilder) {
    return function() {
        let args = Array.from(arguments);

        let callback = args.shift();
        let url = host + urlBuilder(args);

        requestGET(url, data => {
            if (data.error) {
                console.error("Fetching board error: " + data.msg);
                return;
            }

            callback(data.res);
        });
    }
}

export const fetchBoard = makeRequest((boardId) =>
                            `/api/get/${boardId}`);
//                            `/api/get_board.php?boardId=${boardId}`);

export const fetchList = makeRequest((boardId, listId) =>
                           `/api/get/${boardId}/${listId}`);
//                           `/api/get_list.php?boardId=${boardId}&&listId=${listId}`);

export const fetchItem = makeRequest((boardId, listId, itemId) =>
                           `/api/get/${boardId}/${listId}/${itemId}`);
//                           `/api/get_item.php?boardId=${boardId}&&listId=${listId}&&itemId=${itemId}`);
