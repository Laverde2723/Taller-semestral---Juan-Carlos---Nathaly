const stars = document.querySelectorAll('.star');

stars.forEach(function(star,index) {
    star.addEventListener('click', function() {
        for (let i=0; i<=index; i++){
            stars[i].classList.add('checked');
        }
        for (let i=index+1; i<stars.length; i++){
            stars[i].classList.remove('checked');
        }
    })
})

const boton = document.querySelector('button');

boton.addEventListener('click', () => {
  console.log('Producto añadido al carrito');
});