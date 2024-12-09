var btn = document.querySelector('#btn');

console.log(btn);

btn.addEventListener('click', function(){
    alert('clicou!');
    console.log('clicou!');

    console.log(this); //this no evento se refere ao próprio elemento

    this.style.color = 'red';


});

//click afetando outros elementos
var title = document.querySelector('#title');

title.addEventListener('click', function(){
    
    var subtitle = document.querySelector('.subtitle');
    
    subtitle.style.display = 'none';

});

//double click
var subtitle = document.querySelector('.subtitle');

subtitle.addEventListener('dblclick', function(){
    alert('clique duplo');
});