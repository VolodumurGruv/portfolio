// When the user clicks on <div>, open the popup

const popup = document.getElementById("myPopup");
const btnClose = document.querySelector(".btn-close");

function myRemove() {
  if (!popup.classList.contains("show")) {
    popup.classList.add("show");
  }
}

btnClose.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (popup.classList.contains("show")) popup.classList.remove("show");
});
