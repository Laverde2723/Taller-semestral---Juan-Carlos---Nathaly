class SectionComponent extends HTMLElement{
    constructor(){
        super();
        let allProducts = []
        this.arrayProducts()
        
    }

    async arrayProducts() {
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
    this.innerHTML= `<div class="producto">
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
    </div>  `
}
}

customElements.define('section-component', SectionComponent)
export default SectionComponent;