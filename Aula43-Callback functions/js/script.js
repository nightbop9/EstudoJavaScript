function exibir (num){
    console.log("A operação resultou em: " + num);
}

function soma (a, b, callback){
    var op = a + b;
    callback(op);
}

function multiplicação (a, b, cb){
    var op = a * b;
    cb(op);
}

soma(5, 3, exibir);

multiplicação(3, 3, exibir);