// function getValue(first) {
//     return first+2;
// }

// function add(first) {
//     return getValue(first);
// }

// console.log(add(1, 1));
// console.log(add(1));  
function getValue(value) {
    return value + 5;
}

function add(first, second = getValue(first)) {
    return first + second;
}

console.log(add(1, 1));    
console.log(add(1));        