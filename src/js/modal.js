const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal__content");

openModal = function () {
  modal.classList.toggle("active");
};

closeModal = function () {
  modal.classList.toggle("active");
};

modalContent.addEventListener("click", function (e) {
  e.stopPropagation();
});



