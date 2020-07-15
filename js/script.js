// var writeLink = document.querySelector(".contacts-button");
// var writePopup = document.querySelector(".write");
// var writeClose = writePopup.querySelector(".write-button-close");
// var writeForm = writePopup.querySelector(".write-form");
// var writeLogin = writePopup.querySelector(".write-input-name");
// var writePassword = writePopup.querySelector(".write-input-password");


// writeLink.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   writePopup.classList.add("write-show");
//   writeLogin.focus()
// });

// writeClose.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   writePopup.classList.remove("write-show");
// });

// writeForm.addEventListener("submit", function (evt) {
//   console.log("Отправляем форму");
// });



var writeLink = document.querySelector(".contacts-button");
var writePopup = document.querySelector(".write");
var writeClose = writePopup.querySelector(".write-button-close");
var writeForm = writePopup.querySelector(".write-form");
var writeLogin = writePopup.querySelector(".write-input-name");
var writePassword = writePopup.querySelector(".write-input-password");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name-filed");
} catch (err) {
  isStorageSupport = false;
}

writeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.add("write-show");

  if (storage) {
    writeLogin.value = storage;
    writePassword.focus();
  } else {
    writeLogin.focus();
  }
});

writeClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.remove("write-show");
  writePopup.classList.remove("write-error");
});

writeForm.addEventListener("submit", function (evt) {
  if (!writeLogin.value || !writePassword.value) {
    evt.preventDefault();
    writePopup.classList.remove("write-error");
    writePopup.offsetWidth = writePopup.offsetWidth;
    writePopup.classList.add("write-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name-filed", writeLogin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writePopup.classList.contains("write-show")) {
      evt.preventDefault();
      writePopup.classList.remove("write-show");
      writePopup.classList.remove("write-error");
    }
  }
});


