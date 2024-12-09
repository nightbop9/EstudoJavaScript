//keydown

document.addEventListener('keyup', function(event){ //parametro para exibir detalhes do evento

    console.log(event.key) //mostrar tecla 

    if(event.key === 'Enter'){
        console.log('Pressionou enter!')
        
    }
});

//keyup
document.addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        console.log('Soltou o enter')
    }
})