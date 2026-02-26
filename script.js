const button = document.getElementById("shopButton");
const products = document.getElementById("products");

button.addEventListener("click", function () {
  products.classList.toggle("hidden");

  if (products.classList.contains("hidden")) {
    button.textContent = "View Products";
  } else {
    button.textContent = "Hide Products";
  }
});
