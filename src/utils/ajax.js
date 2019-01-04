import { getToken } from '../users';

// use json transactions

function handleErrors(response) {
    if (response.ok && response.status >= 200 && response.status < 300) {
        return response;
    } else {
        throw new Error(response.statusText);
    }
}

function json(response) {
    return response.text().then(resText => {
        try {
            return JSON.parse(resText);
        } catch (err) {
            throw new Error(resText);
        }
    });
}

export function requestPOST(url, data, callback) {
    if (!callback) callback = () => {};

    const token = getToken();
    const headers = (token == null) ? {
        'Content-type': 'application/json'
    } : {
        'Content-type': 'application/json',
        Authorization: `Token ${token}`
    };


    return fetch(url, {
            method: 'post',
            headers: headers,
            body: JSON.stringify(data)
        })
        .then(handleErrors)
        .then(json)
        .then(callback);
}

export const defaultHost = 'http://localhost/';
