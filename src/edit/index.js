import req from './makeRequest';

export const editBoard = req('board', 'api/edit/board');
export const editList = req('list', 'api/edit/list');
export const editItem = req('item', 'api/edit/item');
