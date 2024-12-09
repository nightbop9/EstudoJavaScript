let x = 5; //var x = 5;

x = 12;

console.log(x);

const y = 12;
//y = 7; //erro, constantes nao podem ser re atribuidas
console.log('const y global + ' + y);

if(true){
    let x = 20; //nova variável, valores mantidos em seus escopos
    //x = 20; modificando o valor do x do escopo global
    console.log(x);
    
    const y = 50;
    console.log('const y local+ ' + y);
}

console.log(x);

if(20 > 10){
    const y = 100;
    console(y);
}