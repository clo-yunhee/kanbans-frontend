// use json transactions

function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
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
        .then(status)
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
            body: data
        })
        .then(status)
        .then(json)
        .then(callback)
        .catch(logError);
}
