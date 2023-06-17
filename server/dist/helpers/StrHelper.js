"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluralize = exports.slugify = exports.makeRef = void 0;
const makeRef = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
};
exports.makeRef = makeRef;
const slugify = (str) => {
    return str.split(" ").join("-");
};
exports.slugify = slugify;
const pluralize = (s) => {
    s = s.toLowerCase();
    let pluralizedForm = "";
    if (!s) {
        return null;
    }
    if (s.endsWith("ies") || s.endsWith("es") || (!s.endsWith("ws") && s.endsWith("s"))) {
        return s;
    }
    if (s.endsWith("y") && !s.endsWith("ay")) {
        pluralizedForm = s.substring(0, s.length - 1) + "ies";
    }
    else if (s.endsWith("ws")) {
        pluralizedForm = s + "es";
    }
    else
        pluralizedForm = s + "s";
    return pluralizedForm;
};
exports.pluralize = pluralize;
