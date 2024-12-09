//lenght comprimento da string

var nome = 'Pedro';

console.log(nome.length)

//indexOF

console.log(nome[2]); //caractere da string acessível por indíce

var frase = "O rato roeu a roupa do rei de Roma."

console.log(frase.indexOf('roeu')); //mostra o índice onde começa a palavra (conta espaços)

//Slice extrai a palavra da frase

var roeu = frase.slice(7, 15); //(inicio, até)
console.log(roeu);


//replace troca uma palavra da frase

var novaFrase = frase.replace('roeu', 'comeu');
console.log(novaFrase);


