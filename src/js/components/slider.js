import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  FreeMode,
  Grid,
  A11y,
} from "swiper";
Swiper.use([
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  FreeMode,
  Grid,
  A11y,
]);

// Слайдер Промо
const promoSlider = document.querySelectorAll(".promo__slider");

if (promoSlider) {
  promoSlider.forEach((slider) => {
    const btnNextSlider = slider
      .closest(".promo")
      .querySelector(".promo__btn-next");
    const btnPrevSlider = slider
      .closest(".promo")
      .querySelector(".promo__btn-prev");

    const promoSwiper = new Swiper(slider, {
      loop: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      slidesPerView: 1,
      spaceBetween: 40,
      autoplay: true,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: btnNextSlider,
        prevEl: btnPrevSlider,
      },
    });
  });
}

// Слайдер Категорий
const categorySlider = document.querySelectorAll(".sec-catalog__slider");

if (categorySlider) {
  categorySlider.forEach((slider) => {
    const btnNextSlider = slider
      .closest(".sec-catalog")
      .querySelector(".sec-catalog__btn-next");
    const btnPrevSlider = slider
      .closest(".sec-catalog")
      .querySelector(".sec-catalog__btn-prev");

    const categorySwiper = new Swiper(slider, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: btnNextSlider,
        prevEl: btnPrevSlider,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        470: {
          slidesPerView: 1.6,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2.1,
          spaceBetween: 12,
        },
        1024: {
          slidesPerView: 2.6,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 2.9,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 3.3,
          spaceBetween: 20,
        },
      },
    });
  });
}

// Слайдер Популярных товаров
const popularSlider = document.querySelectorAll(".sec-popular__slider");

if (popularSlider) {
  popularSlider.forEach((slider) => {
    const btnNextSlider = slider
      .closest(".sec-popular")
      .querySelector(".sec-popular__btn-next");
    const btnPrevSlider = slider
      .closest(".sec-popular")
      .querySelector(".sec-popular__btn-prev");

    const popularSwiper = new Swiper(slider, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: btnNextSlider,
        prevEl: btnPrevSlider,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        // 1200: {
        //   slidesPerView: 3,
        //   spaceBetween: 20,
        // },
        // 1440: {
        //   slidesPerView: 3,
        //   spaceBetween: 20,
        // }
      },
    });
  });
}

// Слайдер брендов
const brandsSlider = document.querySelectorAll(".sec-clients__slider");

if (brandsSlider) {
  brandsSlider.forEach((slider) => {
    const btnNextSlider = slider
      .closest(".sec-clients")
      .querySelector(".sec-clients__btn-next");
    const btnPrevSlider = slider
      .closest(".sec-clients")
      .querySelector(".sec-clients__btn-prev");

    const brandsSwiper = new Swiper(slider, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 8,
      // centeredSlides: true,
      // initialSlide: 3,
      navigation: {
        nextEl: btnNextSlider,
        prevEl: btnPrevSlider,
      },
      breakpoints: {
        375: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        1024: {
          slidesPerView: 3.8,
          spaceBetween: 20,
          centeredSlides: true,
          initialSlide: 3,
        },
        // 1200: {
        //   slidesPerView: 3.8,
        //   spaceBetween: 20,
        // },
        1440: {
          slidesPerView: 5,
          spaceBetween: 16,
        },
      },
    });
  });
}

// Слайдер новостей
const newsSlider = document.querySelectorAll(".sec-news__slider");

if (newsSlider) {
  newsSlider.forEach((slider) => {
    const btnNextSlider = slider
      .closest(".sec-news")
      .querySelector(".sec-news__btn-next");
    const btnPrevSlider = slider
      .closest(".sec-news")
      .querySelector(".sec-news__btn-prev");

    const newsSwiper = new Swiper(slider, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: btnNextSlider,
        prevEl: btnPrevSlider,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  });
}

// Слайдер статей
const articlesSlider = document.querySelectorAll(".sec-articles__slider");

if (articlesSlider) {
  articlesSlider.forEach((slider) => {
    const btnNextSlider = slider
      .closest(".sec-articles")
      .querySelector(".sec-articles__btn-next");
    const btnPrevSlider = slider
      .closest(".sec-articles")
      .querySelector(".sec-articles__btn-prev");

    const articlesSwiper = new Swiper(slider, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: btnNextSlider,
        prevEl: btnPrevSlider,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  });
}

// Слайдер Отзывов
const reviewsSlider = document.querySelectorAll(".sec-reviews__slider");

if (reviewsSlider) {
  reviewsSlider.forEach((slider) => {
    const btnNextSlider = slider
      .closest(".sec-reviews")
      .querySelector(".sec-reviews__btn-next");
    const btnPrevSlider = slider
      .closest(".sec-reviews")
      .querySelector(".sec-reviews__btn-prev");

    const reviewsSwiper = new Swiper(slider, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 40,
      navigation: {
        nextEl: btnNextSlider,
        prevEl: btnPrevSlider,
      },
    });
  });
}

// Слайдер похожих товаров
const relatedSlider = document.querySelectorAll(".sec-related__slider");

if (relatedSlider) {
  relatedSlider.forEach((slider) => {
    const btnNextSlider = slider
      .closest(".sec-related")
      .querySelector(".sec-related__btn-next");
    const btnPrevSlider = slider
      .closest(".sec-related")
      .querySelector(".sec-related__btn-prev");

    const relatedSwiper = new Swiper(slider, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: btnNextSlider,
        prevEl: btnPrevSlider,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        // 1200: {
        //   slidesPerView: 3,
        //   spaceBetween: 20,
        // },
        // 1440: {
        //   slidesPerView: 3,
        //   spaceBetween: 20,
        // }
      },
    });
  });
}

// Слайдер сертификатов

const certificatesSliders = document.querySelectorAll(".certificates__slider");

if (certificatesSliders.length) {
  let swipers = [];

  const getSlidesPerView = () => {
    if (window.innerWidth >= 1200) return 3;
    if (window.innerWidth >= 577) return 2;
    return 1;
  };

  const initSliders = () => {
    // уничтожаем старые Swiper
    swipers.forEach((swiper) => {
      swiper.destroy(true, true);
    });

    swipers = [];

    certificatesSliders.forEach((slider) => {
      const block = slider.closest(".certificates");
      const gallery = block.querySelector(".certificates__gallery");

      const btnNext = block.querySelector(".certificates__btn-next");
      const btnPrev = block.querySelector(".certificates__btn-prev");

      const slidesCount = slider.querySelectorAll(".swiper-slide").length;
      const slidesPerView = getSlidesPerView();

      const isNeeded = slidesCount > slidesPerView;

      if (!isNeeded) {
        gallery?.classList.add("is-static");
        return;
      }

      gallery?.classList.remove("is-static");

      const swiper = new Swiper(slider, {
        loop: slidesCount > slidesPerView,

        slidesPerView: 1,
        spaceBetween: 16,

        navigation: {
          nextEl: btnNext,
          prevEl: btnPrev,
        },

        breakpoints: {
          320: { slidesPerView: 1 },
          577: { slidesPerView: 2, spaceBetween: 20 },
          1200: { slidesPerView: 3, spaceBetween: 30 },
        },
      });

      swipers.push(swiper);
    });
  };

  // первый запуск
  initSliders();

  // resize с задержкой
  let timer;

  window.addEventListener("resize", () => {
    clearTimeout(timer);
    timer = setTimeout(initSliders, 200);
  });
}
