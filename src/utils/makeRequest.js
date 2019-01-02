import { requestPOST, defaultHost } from './ajax';

const wrapReject = (name, reject) => (err) => {
    console.warn(`${name} failed: `, err);
    if (reject) {
        reject(err.toString());
    }
}

export function makeRequest(name, url) {
    return function(data, resolve, reject) {
        return requestPOST(defaultHost + url, data, resData => {
            if (resData.error) {
                wrapReject(name, reject)(resData.msg);
            }

            if (resolve) {
                resolve(resData.res);
            }
        }).catch(wrapReject(name, reject));
    }
}
