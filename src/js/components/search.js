import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

document.addEventListener("DOMContentLoaded", () => {

  // Десктопный поиск
  const searchbar = document.querySelector(".searchbar");

  if (!searchbar) return;

  const openBtns = document.querySelectorAll(".searchbar__btn--open, .open-search");
  const closeBtn = searchbar.querySelector(".searchbar__btn--close");
  const input = searchbar.querySelector(".search__input");
  const clearBtn = searchbar.querySelector(".search__btn-clear");
  const tags = searchbar.querySelectorAll(".searchbar__tag");

  const openSearch = () => {
    searchbar.classList.add("is-open");
    input.focus();
  };

  const closeSearch = () => {
    searchbar.classList.remove("is-open");
  };

  openBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openSearch();
    });
  });

  closeBtn.addEventListener("click", () => {
    closeSearch();
  });

    // Клик по подсказкам
  tags.forEach((tag) => {
    tag.addEventListener("click", () => {
      input.value = tag.textContent.trim();
      input.focus();
      input.dispatchEvent(new Event("input"));
    });
  });

  // клик вне компонента
  document.addEventListener('click', (e) => {
    const isClickInside = searchbar.contains(e.target);

    if (!isClickInside && searchbar.classList.contains('is-open')) {
      searchbar.classList.remove('is-open');
    }
  });


  // Мобильный поиск
  const mobileSearch = document.querySelector('.mobile-search');
  const openMobileBtn = document.querySelector('.open-search-mobile');
  const closeMobileBtn = mobileSearch?.querySelector('.mobile-search__btn--close');
  const mobileInput = mobileSearch?.querySelector('.search__input');
  const mobileTags = mobileSearch?.querySelectorAll('.mobile-search__tag');

  if (mobileSearch && openMobileBtn) {
    const openMobileSearch = () => {
      mobileSearch.classList.add('is-open');
      document.body.style.overflow = 'hidden'; // Блокируем скролл
      setTimeout(() => mobileInput?.focus(), 300);
    };

    const closeMobileSearch = () => {
      mobileSearch.classList.remove('is-open');
      document.body.style.overflow = '';
    };

    openMobileBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openMobileSearch();
    });

    closeMobileBtn?.addEventListener('click', () => {
      closeMobileSearch();
    });

    // Клик по подсказкам
    mobileTags?.forEach((tag) => {
      tag.addEventListener('click', () => {
        if (mobileInput) {
          mobileInput.value = tag.textContent.trim();
          mobileInput.focus();
          mobileInput.dispatchEvent(new Event('input'));
        }
      });
    });

    // Закрытие по клику вне контейнера
    mobileSearch.addEventListener('click', (e) => {
      if (e.target === mobileSearch) {
        closeMobileSearch();
      }
    });

    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileSearch.classList.contains('is-open')) {
        closeMobileSearch();
      }
    });
  }
});


