document.addEventListener("DOMContentLoaded", () => {
  const searchbar = document.querySelector(".searchbar");

  if (!searchbar) return;

  const openBtns = searchbar.querySelectorAll(".searchbar__btn--open, .open-search");
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
});


