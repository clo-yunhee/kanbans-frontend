
export default function updateLater(name, callback) {
     // only call backend if the item hasn''t
    // been changed in a given amount of time

    const sKey = `updateTm-${name}`;

    clearTimeout(this.state[sKey]);

    this.state = { ...this.state,
        [sKey]: setTimeout(callback, 1000)
    };
}
