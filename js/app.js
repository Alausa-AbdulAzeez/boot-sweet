// const cartInfo = document.getElementById("cart-info");
// const cart = document.getElementById("cart");
// const maxHeight = document.getElementById("max-height");
// function toggleNav() {
//   cart.classList.toggle("show-cart");
// console.log(cart.classList.show - cart);
// }
// function closeCart() {
//   cart.classList.remove("show-cart");
// }
// cartInfo.addEventListener("click", toggleNav);
// maxHeight.addEventListener("click", closeCart);
(function () {
  const cartInfo = document.getElementById("cart-info");
  const cart = document.getElementById("cart");

  cartInfo.addEventListener("click", function () {
    cart.classList.toggle("show-cart");
  });
})();
