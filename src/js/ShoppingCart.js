import { getLocalStorage, isNumeric } from "./utils.mjs";

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

/** 
function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  if (Array.isArray(cartItems)) {
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");
  }
}

renderCartContents();
*/

export default class ShoppingCart {
  constructor(storageKey, parentSelector) {
    this.key = storageKey;
    this.parentSelector = parentSelector;
  }
  renderCartContents() {
    const cartItems = getLocalStorage(this.key);
    let total = 0;
    if (Array.isArray(cartItems)) {
      const htmlItems = cartItems.map((item) => cartItemTemplate(item));
      document.querySelector(this.parentSelector).innerHTML =
        htmlItems.join("");

      //get total price of items in cart
      cartItems.forEach((item) => {
        if (isNumeric(item.FinalPrice)) {
          total = total + parseFloat(item.FinalPrice);
        }
      });
      //console.log(`Cart Total = ${total}`);
      if (total > 0) {
        let card = document.createElement("div");
        card.classList.add("card");

        let cartTotal = document.createElement("p");
        cartTotal.innerText = `Cart Total: ${total}`;
        card.appendChild(cartTotal);

        document
          .querySelector(this.parentSelector)
          .insertAdjacentElement("afterend", card);
      }
    }
  }
}
