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

export function requestGET(url, callback) {
    return fetch(url)
        .then(handleErrors)
        .then(json)
        .then(callback);
}

export function requestPOST(url, data, callback) {
    if (!callback) callback = () => {};

    return fetch(url, {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(handleErrors)
        .then(json)
        .then(callback);
}

export const defaultHost = 'http://localhost/';
