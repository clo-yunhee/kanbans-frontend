import req from './makeRequest';

export const moveList = req('list', 'api/move/list');
export const moveItem = req('item', 'api/move/item');
