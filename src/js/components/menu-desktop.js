document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll("[data-dropdown]");

  const isDesktop = () =>
    window.matchMedia("(min-width: 1201px)").matches;

  if (!isDesktop()) return;

  dropdowns.forEach((dropdown) => {
    let timeout;

    dropdown.addEventListener("mouseenter", () => {
      clearTimeout(timeout);
      dropdown.classList.add("is-open");
    });

    dropdown.addEventListener("mouseleave", () => {
      timeout = setTimeout(() => {
        dropdown.classList.remove("is-open");
      }, 150);
    });
  });
});
