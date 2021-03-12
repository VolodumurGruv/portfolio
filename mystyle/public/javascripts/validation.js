const userName = document.querySelector(".popup-inpt"),
  message = document.querySelector(".message"),
  form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  if (userName.value.length >= 3) {
    userName.classList.add("success");
    userName.classList.remove("error");
  } else {
    event.preventDefault();
    userName.classList.add("error");
    userName.classList.remove("success");
  }
  checkMsg(event);
});

function checkMsg(event) {
  if (message.value.length >= 3) {
    message.classList.add("success");
    message.classList.remove("error");
  } else {
    event.preventDefault();
    message.classList.add("error");
    message.classList.remove("success");
  }
}
