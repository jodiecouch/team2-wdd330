import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ProductData();
//console.log(dataSource);
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();
