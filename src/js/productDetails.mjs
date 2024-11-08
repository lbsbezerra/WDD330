import { findProductById } from "./productData.mjs";
import { setLocalStorage, getLocalStorage } from "./utils.mjs";

let product = {};

export default async function productDetails(productId) {
  try {
    // Fetches the product details
    product = await findProductById(productId);

    // Checks if the product is found
    if (!product || !product.Id) {
      throw new Error("Product not found");
    }

    // Renders the product details if the product is valid
    renderProductDetails();
    document.getElementById("addToCart").addEventListener("click", addToCart);
  } catch (error) {
    // Displays product unavailable message if the product is not found
    document.querySelector("#productDetails").innerHTML = `
      <p class="error-message">Sorry, the product you are looking for is not available.</p>`;
  }
}
function addToCart() {
  let cartContents = getLocalStorage("so-cart");
  //check to see if there was anything there
  if (!cartContents) {
    cartContents = [];
  }
  // then add the current product to the list
  cartContents.push(product);
  setLocalStorage("so-cart", cartContents);
}
function renderProductDetails() {
  document.querySelector("#productName").innerText = product.Brand.Name;
  document.querySelector("#productNameWithoutBrand").innerText =
    product.NameWithoutBrand;
  document.querySelector("#productImage").src = product.Images.PrimaryLarge;
  document.querySelector("#productImage").alt = product.Name;
  document.querySelector("#productFinalPrice").innerText = product.FinalPrice;
  document.querySelector("#productColorName").innerText =
    product.Colors[0].ColorName;
  document.querySelector("#productDescriptionHtmlSimple").innerHTML =
    product.DescriptionHtmlSimple;
  document.querySelector("#addToCart").dataset.id = product.Id;
}