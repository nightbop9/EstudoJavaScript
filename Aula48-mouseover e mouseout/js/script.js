//evento de mouseover

var title = document.querySelector('#title');

title.addEventListener('mouseover', function(){
    this.style.backgroundColor = 'red';
});

title.addEventListener('mouseout', function(){
    this.style.backgroundColor = 'blue';
    
});

//afetar o elemento com mouseover

var subtitle = document.querySelector('.subtitle');

subtitle.addEventListener('mouseover', function(){
    var legenda = document.querySelector('#legenda');
    legenda.classList.remove('hide')
});

subtitle.addEventListener('mouseout', function(){
    var legenda = document.querySelector('#legenda');
    legenda.classList.add('hide')
});