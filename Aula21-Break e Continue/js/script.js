for(var i = 10; i > 0; i--){
    console.log(i);

    if(i === 5){
        break; //interrompe completamente
    }
}

console.log("Deu o break");

var x = 10;

while(x < 100){
    x+=10;

    if(x === 60 || x === 90){
        console.log('CONTINUE')
        continue; //pula para o próximo loop ;; interrompe parcialmente
    }

    console.log('Testando o continue: ' + x);
}