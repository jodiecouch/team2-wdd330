/*import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const tents = new ProductData("tents");
const list = document.querySelector(".product-list");
const productList = new ProductListing("Tents", tents, list);
productList.init();

console.log(productList);
*/

import { loadHeaderFooter, getLocalStorage } from "./utils.mjs";
loadHeaderFooter();

loadHeaderFooter().then(() => {
    // at this point the header and footer are in the DOM and you can find the `div.cart` element
    const numCartItems = getLocalStorage('so-cart').length;
    const cartLogo = document.querySelector(".cart");
  
    let superScript = document.createElement("sup");
    superScript.textContent = numCartItems;
  
    cartLogo.appendChild(superScript);
  });