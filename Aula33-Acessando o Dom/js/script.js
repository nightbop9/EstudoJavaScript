//tag
var titulo = document.getElementsByTagName('h1')[0]; //[0] para acessar a primeira tag encontrada caso hajam varias iguais

console.log(titulo);
//console.log(titulo)[0];

//acessando toda uma colecao
var lis = document.getElementsByTagName('li'); 
console.log(lis);

//id
var paragrafo = document.getElementById('paragrafo');
console.log(paragrafo);

//class
var itensDaLista = document.getElementsByClassName('item');
console.log(itensDaLista);