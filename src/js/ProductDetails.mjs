import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function productDetailsTemplate(product) {
  let discount = (product.FinalPrice / product.SuggestedRetailPrice) * 100; 
  
  return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${product.Images.PrimaryLarge}"
      alt="${product.NameWithoutBrand}"
    />
    <p class="product-card__price">$${product.FinalPrice}</p>
    <p class="product__color">${product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${product.DescriptionHtmlSimple}
    </p>
    <p class="product__discount">
    ${discount.toFixed()}% off suggested price
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div></section>`;
}

  
export default class ProductDetails 
{
        constructor(productId, dataSource) {
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
        }
    async init(){
        this.product = await this.dataSource.findProductById(this.productId);
        this.renderProductDetails("main");
        //console.log(this.product);
        // add listener to Add to Cart button
        document
        .getElementById("addToCart")
        .addEventListener("click", this.addToCart.bind(this));

        async function addToCartHandler(e) {
            addToCart();
          
        }       
    }

    addToCart() {
        let cart = getLocalStorage("so-cart");
        
        if (!Array.isArray(cart)) {
            cart = [];
        }
        cart.push(this.product);
       
        setLocalStorage("so-cart", cart);
        
        //animate cart
        let shake = "shake";
        let cartIcon = document.getElementById("cartIcon");
        cartIcon.classList.add(shake);  
        setTimeout(function(){
            cartIcon.classList.remove(shake);
        }, 2500);
            
    }

    renderProductDetails(selector){
        const element = document.querySelector(selector);
        element.insertAdjacentHTML("afterBegin", productDetailsTemplate(this.product));
    }
}
   