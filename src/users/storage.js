const tokenKey = 'token';
const usernameKey = 'username';

const eventListeners = {
    'login': [],
    'logout': [],
};

export function isLoggedIn() {
    return getUsername() != null;
}

export function getToken() {
    return sessionStorage.getItem(tokenKey);
}

export function getUsername() {
    return sessionStorage.getItem(usernameKey);
}

export function getPersistedToken() {
    return localStorage.getItem(tokenKey);
}

export function storeToken({ sessionToken, username }, remember) {
    sessionStorage.setItem(usernameKey, username);
    sessionStorage.setItem(tokenKey, sessionToken);
    if (remember) {
        localStorage.setItem(tokenKey, sessionToken);
    }

    fireLogin(username);
}

export function clearToken() {
    sessionStorage.removeItem(tokenKey);
    sessionStorage.removeItem(usernameKey);
    localStorage.removeItem(tokenKey);

    fireLogout();
}

export function listenLogin(callFunc) {
    eventListeners.login.push(callFunc);
}

export function listenLogout(callFunc) {
    eventListeners.logout.push(callFunc);
}

function fireLogin(username) {
    eventListeners.login.forEach(
        func => func(username)
    );
}

function fireLogout() {
    eventListeners.logout.forEach(
        func => func()
    );
}
