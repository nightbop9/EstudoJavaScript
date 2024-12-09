let pessoa = {
    nome: 'Matheus',
    idade: 29,
    falar: function(){ //sera interpretado como metodo do objeto
        console.log("Olá, tudo bem?")
    },
    soma: function(a, b){
        return a + b;
    }
};

console.log(pessoa.nome); //acessando propriedade do meu objeto
//console.log(pessoa.asd); undefined - propriedade nao criada

pessoa.falar(); //invocando metodo do meu objeto
let soma = pessoa.soma(5, 7); //passando parametros

console.log(soma); //mostrando resultado da soma

