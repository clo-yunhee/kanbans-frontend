// use json transactions

export function requestGET(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                callback(this);
            } else {
                console.error('Request failed: ' + this.status);
            }
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
}

export function requestPOST(url, data) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(data));
}
