import { getLocalStorage, renderListWithTemplate } from "./utils.mjs";

export default function ShoppingCart() {
  const cartItems = getLocalStorage("so-cart");
  const outputEl = document.querySelector(".product-list");
  renderListWithTemplate(cartItemTemplate, outputEl, cartItems);
}

function displayCartTotal(total) {
  // Selectors for the total element and the checkout section
  const listFooter = document.querySelector(".list-footer");
  const listTotalElement = document.querySelector(".list-total");

  // Validates and formats the total as a number with two decimal places
  const formattedTotal = isNaN(total) ? "0.00" : parseFloat(total).toFixed(2);

  // Checks if total is greater than 0 to show/hide elements accordingly
  if (parseFloat(formattedTotal) > 0) {
    // Ensures the list footer is displayed
    listFooter.style.display = ""; // Resets to default (inline/block)
    listTotalElement.textContent = `Total: $${formattedTotal}`;
  } else {
    // Hides the list footer and clears total display if total is 0
    listFooter.style.display = "none";
    // Clears previous total
    listTotalElement.textContent = ''; 
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