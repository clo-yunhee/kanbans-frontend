import authReq from './makeAuthRequest';

export const loginUser = authReq('login', 'api/user/login');
export const registerUser = authReq('register', 'api/user/register');

export { default as logoutUser } from './logoutUser';

export {
    getToken,
    getUsername,
    storeToken,
    clearToken,
    restoreToken,
} from './storage';
