let _ = require('lodash');
let arr = [0, 0, 0, 0];
let line = "";

for (let i = 0; i < arr.length; i++) {
    line +=arr[i] + " ";
}

console.log(line);

_.fill(arr, 5, 0, arr.length);

line = "";

for (let i = 0; i < arr.length; i++) {
    line +=arr[i] + " ";
}

console.log(line);