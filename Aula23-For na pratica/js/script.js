//DOM
var lista = ['Laranja', 'Maçã', 'Pera', 'Jaca', 'Limão'];

var listaUl = document.createElement('ul'); //atribuindo a variavel um elemento ul

var body = document.getElementsByTagName('body'); //atribuindo a variavel o a tag body do html

console.log(body[0]); 

body[0].appendChild(listaUl); //cria uma ul filho no body

var listaNoBody = document.getElementsByTagName('ul'); //armazena a tag ul do html

console.log(listaNoBody[0]);

for(var i = 0; i < lista.length; i++){
    var liFor = document.createElement('li'); //cri.a uma li

    var textoLi = document.createTextNode(lista[i]); //acessa o elemento pelo da lista pelo indíce

    liFor.appendChild(textoLi); //atribui dentro da li o conteudo pelo indice da lista

    listaNoBody[0].appendChild(liFor) //

}