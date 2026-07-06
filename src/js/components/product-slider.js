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
    const thumbsSliderEl = thumbsContainer?.querySelector(
      ".product-gallery__thumbs-slider",
    );

    if (!mainSliderEl || !thumbsSliderEl) {
      console.warn("Не найдены слайдеры в галерее");
      return;
    }

    const thumbsSlides = thumbsSliderEl.querySelectorAll(".swiper-slide");
    if (thumbsSlides.length < 2) {
      console.warn("Миниатюр меньше 2, слайдер не инициализируется");
      return;
    }

    // ===== Слайдер миниатюр =====
    const thumbsSwiper = new Swiper(thumbsSliderEl, {
      direction: "vertical",
      loop: true,
      spaceBetween: 10,
      slidesPerView: "auto",
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      observer: true,
      observeParents: true,
      breakpoints: {
        320: {
          direction: "horizontal",
          spaceBetween: 4,
          slidesPerView: "auto",
          loop: false,
        },
        768: {
          direction: "horizontal",
          spaceBetween: 8,
          slidesPerView: "auto",
          loop: false,
        },
        992: {
          direction: "horizontal",
          spaceBetween: 8,
          slidesPerView: "auto",
          loop: true,
        },
        1024: {
          direction: "vertical",
          spaceBetween: 8,
          slidesPerView: 5,
          loop: true,
          watchSlidesProgress: true,
        },
        1200: {
          direction: "vertical",
          spaceBetween: 8,
          slidesPerView: 5,
          loop: true,
          watchSlidesProgress: true,
        },
      },
    });

    // ===== Основной слайдер =====
    const mainSwiper = new Swiper(mainSliderEl, {
      loop: false,
      spaceBetween: 0,
      slidesPerView: 1,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      thumbs: {
        swiper: thumbsSwiper,
      },
    });

    // ===== СТРЕЛКИ =====
    const prevBtn = thumbsContainer.querySelector(
      ".product-gallery__thumb-prev",
    );
    const nextBtn = thumbsContainer.querySelector(
      ".product-gallery__thumb-next",
    );

    function goToSlide(index) {
      const totalSlides = thumbsSlides.length;
      const realIndex = ((index % totalSlides) + totalSlides) % totalSlides;
      thumbsSwiper.slideTo(realIndex);
      mainSwiper.slideTo(realIndex);
    }

    if (prevBtn) {
      prevBtn.removeAttribute("disabled");
      prevBtn.classList.remove("swiper-button-disabled", "swiper-button-lock");
      prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const currentIndex = thumbsSwiper.activeIndex;
        goToSlide(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.removeAttribute("disabled");
      nextBtn.classList.remove("swiper-button-disabled", "swiper-button-lock");
      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const currentIndex = thumbsSwiper.activeIndex;
        goToSlide(currentIndex + 1);
      });
    }

    // ===== СИНХРОНИЗАЦИЯ =====
    thumbsSwiper.on("slideChange", () => {
      const index = thumbsSwiper.activeIndex;
      const totalSlides = thumbsSlides.length;
      mainSwiper.slideTo(index % totalSlides);
    });

    mainSwiper.on("slideChange", () => {
      const index = mainSwiper.activeIndex;
      thumbsSwiper.slideTo(index);
    });

    // ===== КЛИК ПО МИНИАТЮРЕ (ДЕЛЕГИРОВАНИЕ) =====
    const thumbsWrapper = thumbsSliderEl.querySelector(".swiper-wrapper");

    if (thumbsWrapper) {
      thumbsWrapper.addEventListener("click", function (e) {
        const slide = e.target.closest(".swiper-slide");
        if (!slide) return;

        // Находим реальный индекс слайда в Swiper
        const realIndex = thumbsSwiper.slides.indexOf(slide);
        if (realIndex === -1) return;

        console.log(`🖱️ Клик по миниатюре ${realIndex + 1}`);

        thumbsSwiper.slideTo(realIndex);
        mainSwiper.slideTo(realIndex);
      });
    }

    // Синхронизация при загрузке
    setTimeout(() => {
      const initialIndex = mainSwiper.activeIndex;
      thumbsSwiper.slideTo(initialIndex);
      console.log(`✅ Слайдеры синхронизированы: индекс ${initialIndex}`);
    }, 100);

    console.log("✅ Галерея инициализирована");
  });
}
