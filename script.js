function handleBuyNow() {
  alert("you will be delivredsoon!");
}

var buyButtons = document.getElementsByClassName("buy-button");
for (var i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener("click", handleBuyNow);
}
