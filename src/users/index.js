import { makeRequest as req } from '../utils';

export const loginUser = req('Login', 'api/user/login');
export const registerUser = req('Register', 'api/user/register');
export const logoutUser = req('Logout', 'api/user/logout');
export const reauthUser = req('Reauth', 'api/user/reauth');

export const getOwnedBoards = req('Owned boards', 'api/user/owned');
export const getSharedBoards = req('Shared boards', 'api/user/shared');

export {
    getToken,
    getUsername,
    storeToken,
    clearToken,
    getPersistedToken,
} from './storage';
