// In this file, we are defining a function for displaying product details on a webpage and adding the product to a cart

import { findProductById } from "./productData.mjs";
import { setLocalStorage } from "./utils.mjs";

/**
 * Stores the currently displayed product information.
 */
let product = {};

export default async function productDetails(productId) {
  // Retrieve product details asynchronously.
  product = await findProductById(productId);
  // Render the product details on the page.
  renderProductDetails();
  // Add a click event listener to the "Add to Cart" button. (Maybe we can add a error handling try catch here in the future?)
  document.getElementById("addToCart").addEventListener("click", addToCart);
}

/**
 * Adds the current product to the cart by storing it in local storage.
 */
function addToCart() {
  // Store the product information in local storage.
  setLocalStorage("so-cart", product);
}

/**
 * Renders the product details on the page using the DOM. Another opportunity for error handling?
 */
function renderProductDetails() {
  // Update the DOM with product information.
  document.querySelector("#productName").innerText = product.Brand.Name;
  document.querySelector("#productNameWithoutBrand").innerText =
    product.NameWithoutBrand;
  document.querySelector("#productImage").src = product.Image;
  document.querySelector("#productImage").alt = product.Name;
  document.querySelector("#productFinalPrice").innerText = product.FinalPrice;
  document.querySelector("#productColorName").innerText =
    product.Colors[0].ColorName;
  document.querySelector("#productDescriptionHtmlSimple").innerHTML =
    product.DescriptionHtmlSimple;
  document.querySelector("#addToCart").dataset.id = product.Id;
}