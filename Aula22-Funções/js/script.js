function primeiraFuncao(){ //função sem argumento
    console.log("Hello world das funções.");
}

primeiraFuncao(); //invocando função para que seja executada

function dizerNome(nome){ //função com argumento
    console.log("O nome é: " + nome)
}

//se não houvesse argumento, "undefined"
dizerNome("Matheus"); //invocando função com ARGUMENTO para que seja executada
dizerNome("Pedro"); 
dizerNome("Xavier"); 

var nomeDoBancoDeDados = "João";

dizerNome(nomeDoBancoDeDados); //passando argumento para o parametro da função dizerNome, no caso "nome"

function soma (a, b){
    var soma = a + b;
    return soma;
    //return a + b;
}

var somaUm = soma(2, 3);

console.log(somaUm);

var somaDois = soma(5, 5);

console.log(somaDois);

console.log(soma(5, 10))
