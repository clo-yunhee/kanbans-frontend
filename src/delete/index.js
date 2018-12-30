import req from './makeRequest';

export const deleteBoard = req('board', 'api/delete/board');
export const deleteList = req('list', 'api/delete/list');
export const deleteItem = req('item', 'api/delete/item');
