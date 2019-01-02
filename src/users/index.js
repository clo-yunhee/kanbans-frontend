import { makeRequest as req } from '../utils';

export const loginUser = req('Login', 'api/user/login');
export const registerUser = req('Register', 'api/user/register');
export const logoutUser = req('Logout', 'api/user/logout');
export const reauthUser = req('Reauth', 'api/user/reauth');

export {
    getToken,
    getUsername,
    storeToken,
    clearToken,
    getPersistedToken,
} from './storage';
