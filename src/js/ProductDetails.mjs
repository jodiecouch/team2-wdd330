export default class ProductDetails {
    constructor(productId, dataSource) {
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }

    init() {

    }

    addProductToCart(product) {
        let cart = getLocalStorage("so-cart");
        if (!Array.isArray(cart)) {
          cart = [];
        }
      
        cart.push(product);
        console.log(cart);
      
        setLocalStorage("so-cart", cart);
    }

    renderProductDetails() {

    }
}