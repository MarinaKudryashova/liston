document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal");
  if (!modal) return;

  const closeBtn = modal.querySelector(".modal__close");
  let lastFocusedElement = null;

  const openModal = () => {
    lastFocusedElement = document.activeElement;
    modal.classList.add("modal--is-open");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  };

  const closeModal = () => {
    modal.classList.remove("modal--is-open");
    document.body.style.overflow = "";
    if (lastFocusedElement) lastFocusedElement.focus();
  };

  // Кнопки открытия (пример: по селектору .open-modal)
  document.querySelectorAll(".open-modal").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal();
    });
  });

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("modal--is-open")) {
      closeModal();
    }
  });
});
