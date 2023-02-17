import ExternalServices from "./ExternalServices.mjs";
import ProductListing from "./ProductList.mjs";

import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();
const category = getParam("category");
const dataSource = new ExternalServices();
const element = document.querySelector(".product-list");
const listing = new ProductListing(category, dataSource, element);

listing.init();
const title = document.querySelector(".title");
title.textContent = category.toLocaleUpperCase();

/*const tents = new ExternalServices("tents");
const list = document.querySelector(".product-list");
const productList = new ProductListing("Tents", tents, list);
productList.init();

console.log(productList);
*/
