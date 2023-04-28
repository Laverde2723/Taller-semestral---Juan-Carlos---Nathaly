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

const botones = document.querySelectorAll('.boton');

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    botones.forEach((boton) => {
      boton.classList.remove('seleccionado');
    });
    boton.classList.add('seleccionado');
  });
});

const botones2 = document.querySelectorAll('.boton2');

botones2.forEach((boton2) => {
  boton2.addEventListener('click', () => {
    botones2.forEach((boton2) => {
      boton2.classList.remove('seleccionado');
    });
    boton2.classList.add('seleccionado');
  });
});

let allProducts = [];



arrayProducts()

async function arrayProducts() {
    let response = await fetch("https://apimocha.com/nathajson/products")
    let data = await response.json()
    data.forEach(element => {
        allProducts.push(element)
    })
    let url = window.location.search
let paras = new URLSearchParams(url)
let productId = paras.get('id').replace('"',"")

let product = allProducts.find((item)=>{
    let compare = item.productName.replaceAll(" ","-")
    return compare === productId;
})
console.log(product);

let container = document.getElementById('container')

container.innerHTML=`
<div class="producto">
        <h1>Camisa para hombre</h1>
        <img src="../Products/${product.image}" alt="camiseta"> 
            <div class="tarjetaCarrusel">A</div>
            <div class="flechasCarrusel">

            </div>
        </div>    
    </div>

    <div class="contenedor2">
        <h2>${product.productName}</h2>
        <p>Ref ${product.category}</p>
        <p class="precio">$${product.price}</p>  
    </div>  
`

const boton = document.querySelector('#carrito');

boton.addEventListener('click', () => {
  console.log('Producto añadido al carrito');
});
}
