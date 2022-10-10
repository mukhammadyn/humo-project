const elHeaderBurger = document.querySelector(".js-modal-toggler");
const elHeaderModal = document.querySelector(".site-header__modal");

elHeaderBurger.onclick = () =>
  elHeaderModal.classList.toggle("site-header__modal--open");
