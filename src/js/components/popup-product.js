document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal");
  if (!modal) return;

  const closeBtn = modal.querySelector(".modal__close");
  const backBtn = modal.querySelector(".modal__back");
  let lastFocusedElement = null;

  const openModal = () => {
    lastFocusedElement = document.activeElement;
    modal.classList.add("modal--is-open");
    document.body.style.overflow = "hidden";
    // Фокусируемся на крестике, если он виден, иначе на стрелке
    if (closeBtn && window.getComputedStyle(closeBtn).display !== "none") {
      closeBtn.focus();
    } else if (backBtn) {
      backBtn.focus();
    }
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

  // Закрытие по крестику
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  // Закрытие по стрелке "Назад"
  if (backBtn) {
    backBtn.addEventListener("click", closeModal);
  }

  // Закрытие по клику на фон
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Закрытие по Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("modal--is-open")) {
      closeModal();
    }
  });
});
