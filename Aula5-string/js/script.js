var nome = 'Matheus';
var sobrenome = 'Silva'

//typeof exibe o tipo de um elemento

console.log(nome);
console.log(typeof nome);

//concatenação
var nomeCompleto =  nome + ' ' + sobrenome;
console.log(nomeCompleto)

//o que está entre aspas é considerado texto

console.log(typeof "5.4932");

var frase = "Frase comum"

console.log(frase);
console.log(typeof frase);


console.log(nome + ' ' + frase)

//funcao para escrever diretamente na tela do navegador
document.write("Disse 'ola' ");
document.write('Disse "ola"');

//envolver tipos de variáveis diferentes as tornara uma string

var a = 2;
var b = 2;

var gg = nome + a + b;

console.log(gg);
console.log(typeof gg);
