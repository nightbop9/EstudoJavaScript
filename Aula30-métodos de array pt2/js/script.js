//splice - adiciona/substitui um elemento no meio do array
var arr = [1, 2, 3, 4, 5];

arr.splice(2, 0, 999); //(indice, o que sera deletado, valor adicionado;

console.log(arr); // [1, 2, 999, 3, 4, 5]

//removendo elemento específico
arr.splice(4, 1);

console.log(arr); // [1, 2, 999, 3, 5]

//indexOf - encontra o indíce de um elemento

console.log(arr.indexOf(5));

//join - transforma array em frase
//console.log("O rato roeu a roupa do rei de roma.".split(' ')) fazendo array para copia

var arr2 = ['O',     'rato',
  'roeu',  'a',
  'roupa', 'do',
  'rei',   'de',
  'roma.' ];

console.log(arr2.join(', '))


//reverse - inverte a ordem dos elementos no array
console.log(arr2.reverse()); // 
