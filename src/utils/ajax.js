// use json transactions

function handleErrors(response) {
    if (response.ok && response.status >= 200 && response.status < 300) {
        return response;
    } else {
        throw new Error(response.statusText);
    }
}

function json(response) {
    return response.json();
}

function logError(err) {
    console.error('Request failed', err);
}

export function requestGET(url, callback) {
    fetch(url)
        .then(handleErrors)
        .then(json)
        .then(callback)
        .catch(logError);
}

export function requestPOST(url, data, callback) {
    if (!callback) callback = () => {};

    fetch(url, {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(handleErrors)
        .then(json)
        .then(callback)
        .catch(logError);
}

export const defaultHost = 'http://localhost/';
