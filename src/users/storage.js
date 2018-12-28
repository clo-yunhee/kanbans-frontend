const tokenKey = 'token';
const usernameKey = 'username';

export function getToken() {
    return sessionStorage.getItem(tokenKey);
}

export function getUsername() {
    return sessionStorage.getItem(usernameKey);
}

function setToken(token, remember) {
    sessionStorage.setItem(tokenKey, token);
    if (remember) {
        localStorage.setItem(tokenKey, token);
    }
}

function setUsername(username) {
    sessionStorage.setItem(usernameKey, username);
}

export function storeToken({ sessionToken, username }, remember) {
    setToken(sessionToken, remember);
    setUsername(username);
}

export function clearToken() {
    sessionStorage.removeItem(tokenKey);
    sessionStorage.removeItem(usernameKey);
    localStorage.removeItem(tokenKey);
}

export function restoreToken() {
    const token = localStorage.getItem(tokenKey);
    if (token !== null) {
        sessionStorage.setItem(tokenKey, token);
        //todo: fetch username
        sessionStorage.setItem(usernameKey, "Rika(tmp)");
    }
}
