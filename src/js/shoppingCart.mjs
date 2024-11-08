import { getLocalStorage, renderListWithTemplate } from "./utils.mjs";

export default function ShoppingCart() {
  const cartItems = getLocalStorage("so-cart");
  const outputEl = document.querySelector(".product-list");
  renderListWithTemplate(cartItemTemplate, outputEl, cartItems);
}

function displayCartTotal(total) {
  const listFooter = document.querySelector(".list-footer");
  const listTotalElement = document.querySelector(".list-total");

  // Ensures total is a valid number before proceeding
  const formattedTotal = parseFloat(total).toFixed(2);

  if (formattedTotal > 0) {
    // Shows checkout button and updates total with formatting
    listFooter.classList.remove("hide");
    listTotalElement.innerText = `Total: $${formattedTotal}`;
  } else {
    // Hides checkout button if there are no items
    listFooter.classList.add("hide");
    // Clears any previous total
    listTotalElement.innerText = ''; 
  }
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimaryMedium}"
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