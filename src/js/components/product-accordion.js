// Аккордеон на странице товара с характеристиками
document.addEventListener("DOMContentLoaded", function () {
  const accordion = document.querySelector(".single-services__accordion");
  if (!accordion) return;

  const items = accordion.querySelectorAll(".accordion__item");

  items.forEach((item) => {
    const control = item.querySelector(".accordion__control");
    const content = item.querySelector(".accordion__content");

    control.addEventListener("click", () => {
      const isOpen = item.classList.contains("accordion__item--active");

      // Закрываем все остальные
      // items.forEach((el) => {
      //   el.classList.remove('accordion__item--active');
      //   el.querySelector('.accordion__content').setAttribute('aria-hidden', 'true');
      // });

      if (isOpen) {
        item.classList.remove("accordion__item--active");
        content.setAttribute("aria-hidden", "true");
      } else {
        item.classList.add("accordion__item--active");
        content.setAttribute("aria-hidden", "false");
      }
    });
  });
});

// Аккордеон на странице товара вопрос-ответ
document.addEventListener("DOMContentLoaded", () => {
  const accordionFaq = document.querySelector(".sec-faq__accordion");
  // ИСПРАВЛЕНО: проверяем именно accordionFaq, а не старую переменную
  if (!accordionFaq) return;

  const items = accordionFaq.querySelectorAll(".accordion__item");

  items.forEach((item) => {
    const control = item.querySelector(".accordion__control");
    const content = item.querySelector(".accordion__content");
    // const icon = item.querySelector(".accordion__icon svg");

    control.addEventListener("click", () => {
      const isOpen = item.classList.contains("accordion__item--active");

      // Если уже открыт — просто закрываем
      if (isOpen) {
        item.classList.remove("accordion__item--active");
        content.setAttribute("aria-hidden", "true");
        return;
      }

      // Закрываем все остальные (классическое поведение FAQ)
      items.forEach((el) => {
        const elContent = el.querySelector(".accordion__content");
        const elIcon = el.querySelector(".accordion__icon svg");

        el.classList.remove("accordion__item--active");
        if (elContent) elContent.setAttribute("aria-hidden", "true");
      });

      // Открываем текущий
      item.classList.add("accordion__item--active");
      content.setAttribute("aria-hidden", "false");
    });
  });
});
