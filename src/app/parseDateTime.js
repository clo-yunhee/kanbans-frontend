export default function parseDateTime(timestamp) {
    if (timestamp === null) return null;

    return new Date(timestamp * 1000);
}

