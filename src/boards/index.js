import { makeRequest as req } from '../utils';

export const fetchBoard = req('Board fetch', 'api/fetch/board');
export const fetchList = req('List fetch', 'api/fetch/list');
export const fetchItem = req('Item fetch', 'api/fetch/item');

export const createBoard = req('Board create', 'api/create/board');
export const createList = req('List create', 'api/create/list');
export const createItem = req('Item create', 'api/create/item');

export const deleteBoard = req('Board delete', 'api/delete/board');
export const deleteList = req('List delete', 'api/delete/list');
export const deleteItem = req('Item delete', 'api/delete/item');

export const editBoard = req('Board edit', 'api/edit/board');
export const editList = req('List edit', 'api/edit/list');
export const editItem = req('Item edit', 'api/edit/item');

export const moveList = req('list', 'api/move/list');
export const moveItem = req('item', 'api/move/item');
