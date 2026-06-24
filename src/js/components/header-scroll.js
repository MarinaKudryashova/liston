// import vars from '../_vars';
// import { getHeaderHeight } from '../functions/header-height';

// function initHeaderScroll() {
//   if (!vars?.header) return;

//   const offset = 10;
//   let lastScrollTop = 0;
//   let ticking = false;

//   function updateHeader() {
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     // ВСЕГДА добавляем/убираем блюр-фон, независимо от состояния шапки
//     if (scrollTop > offset) {
//       vars.header.classList.add('scroll');
//     } else {
//       vars.header.classList.remove('scroll');
//     }

//     // Скрываем/показываем шапку при скролле
//     if (scrollTop > lastScrollTop && scrollTop > 500) {
//       // Скролл вниз - скрываем
//       vars.header.classList.add('header--hidden');
//     } else {
//       // Скролл вверх - показываем
//       vars.header.classList.remove('header--hidden');
//     }

//     lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
//     getHeaderHeight();
//     ticking = false;
//   }

//   function onScroll() {
//     if (!ticking) {
//       requestAnimationFrame(updateHeader);
//       ticking = true;
//     }
//   }

//   updateHeader();
//   window.addEventListener('scroll', onScroll, { passive: true });
//   window.addEventListener('resize', updateHeader);
// }

// if (document.readyState === 'loading') {
//   document.addEventListener('DOMContentLoaded', initHeaderScroll);
// } else {
//   initHeaderScroll();
// }

import vars from '../_vars';
import { getHeaderHeight } from '../functions/header-height';

function initHeaderScroll() {
  if (!vars?.header) return;

  const offset = 10;
  const showAfter = 500;


  let lastScrollTop = 0;
  let ticking = false;

  function updateHeader() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollingDown = scrollTop > lastScrollTop;


      // Скрываем/показываем шапку при скролле
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Скролл вниз - скрываем
      vars.header.classList.add('header--hidden');
    } else {
      // Скролл вверх - показываем
      vars.header.classList.remove('header--hidden');
    }

    if (scrollTop > showAfter && lastScrollTop > showAfter) {
      vars.header.classList.add('scroll');
      vars.header.classList.remove('header--hidden');
    } else {
      vars.header.classList.remove('scroll');
    }

    // 4. маленький offset (необязательно, но можно оставить)
    if (scrollTop <= offset) {
      vars.header.classList.remove('scroll');
      vars.header.classList.remove('header--hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

    getHeaderHeight();
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }

  updateHeader();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateHeader);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeaderScroll);
} else {
  initHeaderScroll();
}

