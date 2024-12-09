// Está no escopo global
var x = 1; 
var y = 3;
console.log(x, y);

function teste (){
    var z = 0
    console.log(z);
    console.log(x); //acessível por estar no escopo global
}
console.log(y)

teste();

//console.log(z); // indefinido por estar no escopo local

function testando (){
    var z = 5
    console.log(z); //mesmo nome de varável, valores diferentes por escopos diferentes
}

testando();
//if, for, while escopos se misturam no global - controlado por var let const
if(true){  
    var p = 1;
}
console.log(p);

for(let i = 0; i <= 2; i++){

}
console.log(i)