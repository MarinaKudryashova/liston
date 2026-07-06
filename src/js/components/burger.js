// import { disableScroll } from "../functions/disable-scroll";
// import { enableScroll } from "../functions/enable-scroll";

// document.addEventListener("DOMContentLoaded", () => {
//   const btnBurger = document.querySelector("[data-burger]");
//   const menu = document.querySelector("[data-menu]");
//   const dropdowns = document.querySelectorAll("[data-dropdown]");
//   const btnDropdowns = document.querySelectorAll("[data-dropdown-open]");
//   const menuLinks = document.querySelectorAll("[data-menu-item]");
//   const subMenus = document.querySelectorAll('.sub-menu');
//   const backBtns = document.querySelectorAll('.sub-menu__back');
//   const openButtons = document.querySelectorAll("[data-open]");

//   if (!btnBurger || !menu) return;

//   const isMobile = () =>
//     window.matchMedia("(max-width: 1024px)").matches;


//   // BURGER (mobile only UX)

//   const openBurger = () => {
//     btnBurger.classList.add("is-open");
//     menu.classList.add("is-open");
//     disableScroll();
//   };

//   const closeBurger = () => {
//     btnBurger.classList.remove("is-open");
//     menu.classList.remove("is-open");

//     submenus.forEach((m) => m.classList.remove("is-active"));

//     enableScroll();
//   };

//   btnBurger.addEventListener("click", () => {
//     menu.classList.contains("is-open")
//       ? closeBurger()
//       : openBurger();
//   });

//   menuLinks.forEach((link) => {
//     link.addEventListener("click", () => {
//       closeBurger();
//     });
//   });

//   document.addEventListener("click", (e) => {
//     if (
//       menu.classList.contains("is-open") &&
//       !menu.contains(e.target) &&
//       !btnBurger.contains(e.target)
//     ) {
//       closeBurger();
//     }
//   });

//   document.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") closeBurger();
//   });


//   // Mobile drilldown

// const closeAllMenus = () => {
//   submenus.forEach((m) => m.classList.remove("is-active"));
// };

// const initMobile = () => {
//   openButtons.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       e.preventDefault(); // 🆕 важно для <a>

//       const target = btn.dataset.open;

//       closeAllMenus();

//       const submenu = document.querySelector(
//         `[data-submenu="${target}"]`
//       );

//       if (!submenu) return;

//         closeAllMenus();
//         submenu.classList.add("is-active");
//     });
//   });

//   backBtns.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const submenu = btn.closest(".sub-menu");
//       if (submenu) submenu.classList.remove("is-active");
//     });
//   });
// };


//   // DROPDOWNS (DESKTOP HOVER)

//   const initDesktopHover = () => {
//     dropdowns.forEach((dropdown) => {
//       let timeout;

//       dropdown.addEventListener("mouseenter", () => {
//         clearTimeout(timeout);

//         const parent = dropdown.parentElement;
//         parent
//           .querySelectorAll(":scope > [data-dropdown]")
//           .forEach((el) => {
//             if (el !== dropdown) el.classList.remove("is-open");
//           });

//         dropdown.classList.add("is-open");
//       });

//       dropdown.addEventListener("mouseleave", () => {
//         timeout = setTimeout(() => {
//           dropdown.classList.remove("is-open");
//         }, 150);
//       });
//     });
//   };


//   // INIT

//   const init = () => {
//     if (isMobile()) {
//       initMobile();
//     } else {
//       initDesktopHover();
//     }
//   };

//   init();

//   // reset state on resize
//   window.addEventListener("resize", () => {
//     dropdowns.forEach((d) => d.classList.remove("is-open"));
//     subMenus.forEach((m) => m.classList.remove("is-active"));
//   });
// });
