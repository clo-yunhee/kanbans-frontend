import { requestPOST, defaultHost } from '../utils';

export default function makeAuthRequest(name, url) {
    return function(data, resolve, reject, remember) {
        return requestPOST(defaultHost + url, data, resData => {
            if (resData.error) {
                console.log(`Authentication via ${name} failed: ${resData.msg}`);
                reject(resData.msg);
                return;
            }

            resolve(resData.res, remember);
        });
    }
}

