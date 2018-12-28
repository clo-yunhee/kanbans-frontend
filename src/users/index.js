import authReq from './makeAuthRequest';

export const loginUser = authReq('login', 'api/user/login');
export const registerUser = authReq('register', 'api/user/register');

export { logoutUser } from './logoutUser';

export {
    getToken,
    getUsername,
    storeToken,
    clearToken,
    getPersistedToken,
} from './storage';

export { validateToken } from './validateToken';
