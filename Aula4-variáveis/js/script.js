
//var e let parecidos, mas com escopo diferente
//var é global no programa
//let funciona apenas no bloco em que foi declarado
//const e um tipo de varivavel imutavel, nao permitindo reatribuicao somente MODIFICACAO de propriedades em arrays ou objetos
const nome = "João";
nome = "Maria"; // Erro: Assignment to constant variable

const objeto = { chave: "valor" };

// Modificação (permitido)
objeto.chave = "novo valor"; 

// Reatribuição (não permitido)
objeto = { novaChave: "novoValor" }; // Erro


var teste = 1;

console.log("teste");

teste = 'Matheus';

console.log(teste);

// usar camelCase

let testando = 1;

const ola = 2;

console.log(testando);

console.log(ola)