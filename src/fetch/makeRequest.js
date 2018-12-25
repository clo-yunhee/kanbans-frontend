import { requestGET, defaultHost } from '../utils';

export default function makeRequest(name, urlBuilder) {
    return function(callback, ...args) {
        let url = defaultHost + urlBuilder(args);

        requestGET(url, data => {
            if (data.error) {
                console.error(`Fetching ${name} error: ${data.msg}`);
                return;
            }

            callback(data.res);
        });
    }
}
