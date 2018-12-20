import { requestPOST, defaultHost } from './ajax';

function makeRequest(name, url) {
    return function(data, callback) {
        return requestPOST(defaultHost + url, data, resData => {
            if (resData.error) {
                console.error(`Updating ${name} failed: ${resData.msg}`);
                return;
            }

            if (callback) {
                callback(resData.res);
            }
        });
    }
}

export const updateBoard = makeRequest('board', '/api/update/board');
export const updateList = makeRequest('list', '/api/update/list');
export const updateItem = makeRequest('item', '/api/update/item');
