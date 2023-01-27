import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";

const tents = new ProductData("tents");
const list = document.querySelector(".product-list");
const productList = new ProductListing('Tents', tents, list);
productList.init();

console.log(productList);
