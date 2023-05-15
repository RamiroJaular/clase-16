const boton = document.getElementById('boton');
boton.addEventListener('click', function(i){
    alert(i.currentTarget.innerText)
})