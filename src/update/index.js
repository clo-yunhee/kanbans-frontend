import req from './makeRequest';

export const updateBoard = req('board', 'api/update/board');
export const updateList = req('list', 'api/update/list');
export const updateItem = req('item', 'api/update/item');
