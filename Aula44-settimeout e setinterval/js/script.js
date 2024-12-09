//settimeout
console.log('antes do settimeout')

setTimeout(function(){
    console.log('testando settimeout')
}, 3000);

console.log('depois do settimeout')

setInterval(function(){ //executa ate instrucao de parada
    console.log('testando setinterval')
    
}, 2000);