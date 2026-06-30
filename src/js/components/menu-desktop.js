document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll("[data-dropdown]");

  const isDesktop = () =>
    window.matchMedia("(min-width: 1025px)").matches;

  if (!isDesktop()) return;

  dropdowns.forEach((dropdown) => {
    let timeout;

    dropdown.addEventListener("mouseenter", () => {
      if (!isDesktop()) return;
      clearTimeout(timeout);
      dropdown.classList.add("is-open");
    });

    dropdown.addEventListener("mouseleave", () => {
      if (!isDesktop()) return;
      timeout = setTimeout(() => {
        dropdown.classList.remove("is-open");
      }, 150);
    });
  });
});
