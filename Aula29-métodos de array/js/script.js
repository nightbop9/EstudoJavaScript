// lenght

var arr = [1, 2, 3, 4, 5];

console.log(arr.length);

// push - adiciona um elemento no array

arr.push(6);
arr.push("Qualquer coisa");
console.log(arr);

//pop - remove o último elemento do array
arr.pop();
console.log(arr);

//unshift - adiciona um elemento no início do array

arr.unshift(0);
arr.unshift("Começo");
console.log(arr);

//shift - remove o primeiro elemento do array

arr.shift();
console.log(arr);

//acessar o último elemento
console.log(arr[arr.length - 1]);
console.log(arr.length);

//isArray

console.log(Array.isArray(5));
console.log(Array.isArray(arr));
