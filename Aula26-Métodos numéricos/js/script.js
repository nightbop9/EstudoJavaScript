//todo números é filho do objeto umber e herda os métodos numéricos
//parsefloat 10.0 //transforma atributos em números com ponto flutuante

console.log(parseFloat('12.999'));
//console.log(typeof(parseFloat('12.999')));

console.log(Number.parseFloat('12.999')); //objeto Number possui esses metodos, é permitido usar o método sem a presença do objeto

//parseint
console.log(parseInt('10'));
console.log(parseInt(16.96));

//tofixed limita o número de casas decimais
console.log(22.99.toFixed(1));
console.log(22.61239204.toFixed(1)); //arredonda

//isNaN - not a number - verifica se é número


console.log(isNaN('teste'));
console.log(isNaN(4));
console.log(isNaN('4'));//entende como número

//MAX_VALUE e MIN_VALUE //valores limite aceitos pelo js
//acima disso erros de infinity
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(2.7976931348623157e+308);

