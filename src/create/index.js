import req from './makeRequest';

export const createBoard = req('board', 'api/create/board');
export const createList = req('list', 'api/create/list');
export const createItem = req('item', 'api/create/item');
