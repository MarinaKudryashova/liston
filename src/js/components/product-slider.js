import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  FreeMode,
  Grid,
  A11y,
  Thumbs,
} from "swiper";

Swiper.use([
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  FreeMode,
  Grid,
  A11y,
  Thumbs,
]);

// Инициализация галереи с миниатюрами
const productGalleries = document.querySelectorAll(".product-gallery");

if (productGalleries.length) {
  productGalleries.forEach((gallery) => {
    const mainSliderEl = gallery.querySelector(".product-gallery__main");
    const thumbsContainer = gallery.querySelector(".product-gallery__thumbs");
    const thumbsSliderEl = thumbsContainer.querySelector(
      ".product-gallery__thumbs-slider",
    );

    if (!mainSliderEl || !thumbsSliderEl) return;

    const thumbsSlides = thumbsSliderEl.querySelectorAll(".swiper-slide");
    if (thumbsSlides.length < 2) return;

    // Слайдер навигации (миниатюры)
    const thumbsSwiper = new Swiper(thumbsSliderEl, {
      direction: "vertical", // по умолчанию вертикально
      loop: thumbsSlides.length > 5,
      spaceBetween: 10,
      slidesPerView: "auto",
      watchSlidesProgress: true,
      navigation: {
        nextEl: thumbsContainer.querySelector(".product-gallery__thumb-next"),
        prevEl: thumbsContainer.querySelector(".product-gallery__thumb-prev"),
      },
      breakpoints: {
        // На мобилках (до 767px) — горизонтально
        320: {
          direction: "horizontal",
          spaceBetween: 4,
          slidesPerView: 3,
        },
        // На планшетах (768–991px) — горизонтально
        768: {
          direction: "horizontal",
          spaceBetween: 8,
          slidesPerView: 4, // можно настроить под ваш макет
        },
        // На десктопе (≥992px) — вертикально
        992: {
          direction: "vertical",
          spaceBetween: 8,
        },
      },
    });

    // Основной слайдер (убираем loop, т.к. у один слайд)
    const mainSwiper = new Swiper(mainSliderEl, {
      loop: false, // было true → false, чтобы избежать бага с шириной
      spaceBetween: 0,
      slidesPerView: 1,
      thumbs: {
        swiper: thumbsSwiper,
      },
    });
  });
}
