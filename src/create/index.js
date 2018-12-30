import req from './makeRequest';

export const createBoard = req('board', 'api/new/board');
export const createList = req('list', 'api/new/list');
export const createItem = req('item', 'api/new/item');
