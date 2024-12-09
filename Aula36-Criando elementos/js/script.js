//criando elemento
var novoParagrafo = document.createElement('p');

//criando texto
var texto = document.createTextNode('Este é o conteúdo do parágrafo.');

//inserindo o texto
novoParagrafo.appendChild(texto);
console.log(novoParagrafo);

var body = document.querySelector('body');
console.log(body)

body.appendChild(novoParagrafo);

var container = document.getElementById('container');

console.log(container);

var el = document.createElement('span');

el.appendChild(document.createTextNode("texto do span"));
console.log(el);

container.appendChild(el);