var mapLink = document.querySelector(".contacts-map-link");

var mapPopup = document.querySelector(".map-popup");
var mapClose = mapPopup.querySelector(".button-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("map-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("map-show");
});
