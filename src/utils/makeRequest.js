import { requestPOST, defaultHost } from './ajax';

const wrapReject = (name) => (reject) => (err) => {
    console.warn(`${name} failed: `, err);
    if (reject) {
        reject(err.toString());
    }
}

export function makeRequest(name, url) {
    const wrapRejectName = wrapReject(name);

    return function(data, resolve, reject) {
        const wrappedReject = wrapRejectName(reject);

        return requestPOST(defaultHost + url, data, resData => {
            if (resData.error) {
                wrappedReject(resData.msg);
            }

            if (resolve) {
                resolve(resData.res);
            }
        }).catch(wrappedReject);
    }
}
