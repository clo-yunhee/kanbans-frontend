import { requestPOST, defaultHost } from '../utils';

export default function logoutUser(payload, resolve, reject) {
    return requestPOST(
        defaultHost + 'api/user/logout',
        payload,
        resData => {
            if (resData.error) {
                console.log(`Logout request failed: ${resData.msg}`);
                reject(resData.msg);
                return;
            }

            resolve(resData.res);
        }
    )
}
