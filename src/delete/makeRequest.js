import { requestPOST, defaultHost } from '../utils';

export default function makeRequest(name, url) {
    return function(data, callback) {
        return requestPOST(defaultHost + url, data, resData => {
            if (resData.error) {
                console.error(`Deleting ${name} failed: ${resData.msg}`);
                return;
            }

            if (callback) {
                callback(resData.res);
            }
        });
    }
}
