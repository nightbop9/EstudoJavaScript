//Array não é um tipo, mas considerado um objeto, servindo como lista
//elementos acessados por indice
//a ideia é manter um unico tipo de variável
var arr = [5, 'Matheus', true, {teste: 1, teste2: 2}]; // obj -> {}

console.log(arr);
console.log(typeof arr);

var arr2 = [2, 3, 4, 5, 6];
console.log(arr2);

//acessando elementos por indíce
console.log(arr[1]);
console.log(arr2[0]);

//adicionando novos elementos
arr[4] = 10;
console.log(arr);

//sobrescevendo elementos
arr[0] = 'Teste';
console.log(arr);

