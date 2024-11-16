//variável do tipo objeto, comporta múltiplos valores de diferentes tipos, neste caso propriedades, semelhantes a um array

var obj ={
    nome: 'Matheus',
    idade: 19,
    profissao: 'programador',
    estarTrabalhando: true,
};

console.log(obj);
console.log(typeof obj);

//imprimindo um atributo especifico de um objeto
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log("Meu nome é: " + obj.nome);

//é possível criar ou alterar um propriedade com '='
//atribuindo um novo valor a uma propriedade do objeto
obj.nome = 'Pedro';

console.log(obj.nome);
console.log(obj);

//criando novas propriedades diretamente no objeto
obj.graduacao = true;

console.log(obj);



