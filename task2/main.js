function deepCopy(obj, hash = new WeakMap()) {
    if (obj === null || typeof obj !== 'object') return obj; 

    if (hash.has(obj)) return hash.get(obj); 

    let copy;
    if (obj instanceof Date) {
        copy = new Date(obj);
    } else if (obj instanceof RegExp) {
        copy = new RegExp(obj);
    } else if (obj instanceof Map) {
        copy = new Map();
        hash.set(obj, copy);
        obj.forEach((value, key) => copy.set(key, deepCopy(value, hash)));
        return copy;
    } else if (obj instanceof Set) {
        copy = new Set();
        hash.set(obj, copy);
        obj.forEach(value => copy.add(deepCopy(value, hash)));
        return copy;
    } else if (Array.isArray(obj)) {
        copy = [];
    } else {
        copy = Object.create(Object.getPrototypeOf(obj)); 
    }

    hash.set(obj, copy);

    for (const key of Reflect.ownKeys(obj)) { 
        const descriptor = Object.getOwnPropertyDescriptor(obj, key);
        if (descriptor && !descriptor.enumerable) continue;
        copy[key] = deepCopy(obj[key], hash);
    }

    return copy;
}

const original = {
    a: 1,
    b: { c: 2 },
    d: [3, 4],
    e: new Date(),
    f: new Map([[1, 2]]),
    g: Symbol('test'),
    h: function () { }
};

original.self = original; 

const copy = deepCopy(original);
console.log(copy.self === copy); 
console.log(copy.b.c === original.b.c); 