import { requestPOST, defaultHost } from '../utils';

export default function makeRequest(name, url) {
    return function(data, errorCallback) {
        return requestPOST(defaultHost + url, data, resData => {
            if (resData.error) {
                console.error(`Editing ${name} failed: ${resData.msg}`);

                if (errorCallback) {
                    errorCallback(resData.msg);
                }
            }
        });
    }
}
