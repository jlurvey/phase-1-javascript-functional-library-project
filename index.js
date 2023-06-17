function myEach(collection, callback) {    
    let array
    if (Array.isArray(collection)) {
        array = collection;
    } else { 
        array = Object.values(collection);
    };
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    };
    return collection;
};
function myMap(collection, callback) {
    let array
    
    if (Array.isArray(collection)) {
        array = collection;
    } else { 
        array = Object.values(collection);
    };
    
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    return newArray;
};
function myReduce(collection, callback, acc) {
    let array
    
    if (Array.isArray(collection)) {
        array = collection;
    } else { 
        array = Object.values(collection);
    };
    let i = 0;
    if(acc === undefined) {
        acc = array[0];
        i = 1
    };
    for (i; i < array.length; i++) {
        acc = callback(acc,array[i]);
    };
    return acc;
};
function myFind(collection, predicate) {
    const array = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i]) === true) {
            return array[i];
        };
    };
    return undefined;
};
function myFilter(collection, predicate) {
    const array = Array.isArray(collection) ? collection : Object.values(collection);
    const newArray = [];
/*     const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i]) === true) {
            newArray.push(array[i])
        };
    };
    return newArray */
// above commented code simplified using ? conditional
    for (let i = 0; i < array.length; i++) {
        predicate(array[i]) === true ? newArray.push(array[i]) : undefined;
    }
    return newArray
};
function mySize(collection) {
    const array = Array.isArray(collection) ? collection : Object.values(collection);
    return array.length
};
function myFirst(array, n) {
    return n === undefined ? array[0] : array.slice(0,n);
};
function myLast(array, n) {
    return n === undefined ? array[array.length-1] :
     array.slice(array.length-n);
};
function myKeys(object) {
    let keys =[];
    for (let key in object) {
        keys.push(key)
    }
    return keys
};
function myValues(object) {
    let values = [];
    for (let key in object) {
        values.push(object[key])
    }
    return values
};
