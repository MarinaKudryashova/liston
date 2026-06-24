import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

document.addEventListener("DOMContentLoaded", () => {
  const btnBurger = document.querySelector("[data-burger]");
  const menu = document.querySelector("[data-menu]");

  const subMenus = document.querySelectorAll(".sub-menu");
  const openButtons = document.querySelectorAll("[data-open]");
  const backBtns = document.querySelectorAll(".sub-menu__back");

  const isMobile = () =>
    window.matchMedia("(max-width: 1024px)").matches;

  if (!btnBurger || !menu) return;

  const openBurger = () => {
    btnBurger.classList.add("is-open");
    menu.classList.add("is-open");
    disableScroll();
  };

  const closeBurger = () => {
    btnBurger.classList.remove("is-open");
    menu.classList.remove("is-open");

    subMenus.forEach((m) => m.classList.remove("is-active"));

    enableScroll();
  };

  btnBurger.addEventListener("click", () => {
    menu.classList.contains("is-open")
      ? closeBurger()
      : openBurger();
  });

  // OPEN submenu
  openButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const target = btn.dataset.open;
      const submenu = document.querySelector(
        `[data-submenu="${target}"]`
      );

      if (!submenu) return;

      subMenus.forEach((m) => m.classList.remove("is-active"));
      submenu.classList.add("is-active");
    });
  });

  // BACK
  backBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const submenu = btn.closest(".sub-menu");
      if (submenu) submenu.classList.remove("is-active");
    });
  });
});
