// modal pic of certificate

const imgbtn = document.querySelector(".imgbtn");
const modalAlert = document.querySelector(".modal-cert");
const closeSert = document.querySelector(".close-cert");

imgbtn.addEventListener("click", (event) => {
  event.preventDefault();
  modalAlert.style.display = "block";
});

closeSert.addEventListener("click", (event) => {
  event.preventDefault();
  modalAlert.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modalAlert) {
    modalAlert.style.display = "none";
  }
});
