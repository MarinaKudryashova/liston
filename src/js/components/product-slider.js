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
      loop: false,
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
          loop: false,
        },
        1024: {
          direction: "vertical",
          spaceBetween: 8,
          slidesPerView: 5,
          loop: false,
          watchSlidesProgress: true,
        },
        1200: {
          direction: "vertical",
          spaceBetween: 8,
          slidesPerView: 5,
          loop: false,
          watchSlidesProgress: true,
        },
      },
    });

    // ===== Основной слайдер =====
    const mainSwiper = new Swiper(mainSliderEl, {
      loop: false,
      initialSlide: 0,
      spaceBetween: 0,
      slidesPerView: 1,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      thumbs: {
        swiper: thumbsSwiper,
      },
    });

    // ===== ФУНКЦИЯ ПРОКРУТКИ К АКТИВНОЙ МИНИАТЮРЕ =====
   function scrollToActiveThumb() {
      const container = thumbsSliderEl;
      if (!container) return;

      // Ищем активную миниатюру
      let activeSlide = container.querySelector(".swiper-slide-thumb-active");

      // Если активной нет — берём первый слайд
      if (!activeSlide) {
        activeSlide = container.querySelector('.swiper-slide:not(.swiper-slide-duplicate)');
      }

      if (activeSlide) {
        // Прокручиваем контейнер к слайду
        const slideTop = activeSlide.offsetTop;
        const containerTop = container.offsetTop;
        container.scrollTop = slideTop - containerTop;
      }
    }

    // ===== СТРЕЛКИ =====
    const prevBtn = thumbsContainer.querySelector(
      ".product-gallery__thumb-prev",
    );
    const nextBtn = thumbsContainer.querySelector(
      ".product-gallery__thumb-next",
    );

    if (prevBtn) {
      prevBtn.removeAttribute("disabled");
      prevBtn.classList.remove("swiper-button-disabled", "swiper-button-lock");
      prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const currentIndex = mainSwiper.activeIndex;
        console.log('⬅️ Стрелка "вверх", текущий индекс:', currentIndex);

        if (currentIndex > 0) {
          const newIndex = currentIndex - 1;
          mainSwiper.slideTo(newIndex);

          setTimeout(() => {
            thumbsSwiper.slideTo(newIndex);
            console.log(`✅ Синхронизация: main=${newIndex}, thumbs=${thumbsSwiper.activeIndex}`);
            scrollToActiveThumb();
          }, 300);
        }
      });
    }

    if (nextBtn) {
      nextBtn.removeAttribute("disabled");
      nextBtn.classList.remove("swiper-button-disabled", "swiper-button-lock");
      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const currentIndex = mainSwiper.activeIndex;
        const totalSlides = thumbsSlides.length;
        console.log('➡️ Стрелка "вниз", текущий индекс:', currentIndex, 'всего:', totalSlides);

        if (currentIndex < totalSlides - 1) {
          const newIndex = currentIndex + 1;
          mainSwiper.slideTo(newIndex);

          setTimeout(() => {
            thumbsSwiper.slideTo(newIndex);
            console.log(`✅ Синхронизация: main=${newIndex}, thumbs=${thumbsSwiper.activeIndex}`);
            scrollToActiveThumb();
          }, 300);
        }
      });
    }

    // ===== СИНХРОНИЗАЦИЯ =====
    thumbsSwiper.on("slideChange", () => {
      const index = thumbsSwiper.activeIndex;
      mainSwiper.slideTo(index);
      setTimeout(scrollToActiveThumb, 50);
    });

    mainSwiper.on("slideChange", () => {
      const index = mainSwiper.activeIndex;
      thumbsSwiper.slideTo(index);
      setTimeout(scrollToActiveThumb, 50);
    });

    // ===== КЛИК ПО МИНИАТЮРЕ =====
    const thumbsWrapper = thumbsSliderEl.querySelector(".swiper-wrapper");

    if (thumbsWrapper) {
      thumbsWrapper.addEventListener("click", function (e) {
        const slide = e.target.closest(".swiper-slide");
        if (!slide) return;

        const realIndex = thumbsSwiper.slides.indexOf(slide);
        if (realIndex === -1) return;

        console.log(`🖱️ Клик по миниатюре ${realIndex + 1}`);

        thumbsSwiper.slideTo(realIndex);
        mainSwiper.slideTo(realIndex);
        setTimeout(scrollToActiveThumb, 50);
      });
    }

    // ===== СИНХРОНИЗАЦИЯ ПРИ ЗАГРУЗКЕ =====
    // ===== СИНХРОНИЗАЦИЯ ПРИ ЗАГРУЗКЕ =====
    function scrollToFirstThumb() {
      const container = thumbsSliderEl;
      // Ищем первый слайд (оригинальный, не дубликат)
      const firstSlide = container?.querySelector('.swiper-slide:not(.swiper-slide-duplicate)');

      if (firstSlide) {
        // Прокручиваем контейнер к первому слайду
        container.scrollTop = firstSlide.offsetTop - container.offsetTop;
        console.log('✅ Прокрутили к первой миниатюре');
      } else {
        console.warn('⚠️ Первый слайд не найден');
      }
    }

    // Принудительная синхронизация с несколькими попытками
    setTimeout(() => {
      const initialIndex = 0;
      mainSwiper.slideTo(initialIndex);
      thumbsSwiper.slideTo(initialIndex);
      console.log(`✅ Слайдеры синхронизированы: индекс ${initialIndex}`);

      // Прокручиваем к первой миниатюре с несколькими задержками
      setTimeout(scrollToFirstThumb, 100);
      setTimeout(scrollToFirstThumb, 300);
      setTimeout(scrollToFirstThumb, 500);
    }, 100);

    console.log("✅ Галерея инициализирована");
  });
}

