
export default function extractProps(propNames, obj) {
    let res = {};

    propNames.forEach(k => res[k] = obj[k]);

    return res;
}

