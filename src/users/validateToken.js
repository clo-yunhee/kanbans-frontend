import { requestPOST, defaultHost } from '../utils';

export function validateToken(token, resolve, reject) {
    const payload = {
        sessionToken: token
    };

    return requestPOST(
        defaultHost + 'api/user/reauth',
        payload,
        resData => {
            if (resData.error) {
                console.log(`Validating token failed: ${resData.msg}`);
                reject(resData.msg);
                return;
            }

            resolve(resData.res);
        }
    )
}
