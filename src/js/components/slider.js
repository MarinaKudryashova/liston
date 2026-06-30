import Swiper, { Navigation, Pagination, Autoplay, EffectFade, FreeMode, Grid, A11y } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay, EffectFade, FreeMode, Grid, A11y]);

// Слайдер Промо
const promoSlider = document.querySelectorAll('.promo__slider');

if(promoSlider) {
  promoSlider.forEach((slider) => {
    const btnNextSlider = slider.closest('.promo').querySelector('.promo__btn-next');
    const btnPrevSlider = slider.closest('.promo').querySelector('.promo__btn-prev');

    const promoSwiper = new Swiper(slider, {
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
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
      }
    })
  })
}

// Слайдер Категорий
const categorySlider = document.querySelectorAll('.sec-catalog__slider');

if(categorySlider) {
  categorySlider.forEach((slider) => {
    const btnNextSlider = slider.closest('.sec-catalog').querySelector('.sec-catalog__btn-next');
    const btnPrevSlider = slider.closest('.sec-catalog').querySelector('.sec-catalog__btn-prev');

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
        }
      }
    })
  })
}

// Слайдер Популярных товаров
const popularSlider = document.querySelectorAll('.sec-popular__slider');

if (popularSlider) {
  popularSlider.forEach((slider) => {
    const btnNextSlider = slider.closest('.sec-popular').querySelector('.sec-popular__btn-next');
    const btnPrevSlider = slider.closest('.sec-popular').querySelector('.sec-popular__btn-prev');

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
      }
    })
  })
}

// Слайдер брендов
const brandsSlider = document.querySelectorAll('.sec-clients__slider');

if(brandsSlider) {
  brandsSlider.forEach((slider) => {
    const btnNextSlider = slider.closest('.sec-clients').querySelector('.sec-clients__btn-next');
    const btnPrevSlider = slider.closest('.sec-clients').querySelector('.sec-clients__btn-prev');

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
        // 1440: {
        //   slidesPerView: 3.8,
        //   spaceBetween: 16,
        // }
      }
    })
  })
}

// Слайдер новостей
const newsSlider = document.querySelectorAll('.sec-news__slider');

if(newsSlider) {
  newsSlider.forEach((slider) => {
    const btnNextSlider = slider.closest('.sec-news').querySelector('.sec-news__btn-next');
    const btnPrevSlider = slider.closest('.sec-news').querySelector('.sec-news__btn-prev');

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
      }
    })
  })
}

  // Слайдер статей
const articlesSlider = document.querySelectorAll('.sec-articles__slider');

if(articlesSlider) {
  articlesSlider.forEach((slider) => {
    const btnNextSlider = slider.closest('.sec-articles').querySelector('.sec-articles__btn-next');
    const btnPrevSlider = slider.closest('.sec-articles').querySelector('.sec-articles__btn-prev');

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
      }
    })
  })
}


// Слайдер Отзывов
const reviewsSlider = document.querySelectorAll('.sec-reviews__slider');

if(reviewsSlider) {
  reviewsSlider.forEach((slider) => {
    const btnNextSlider = slider.closest('.sec-reviews').querySelector('.sec-reviews__btn-next');
    const btnPrevSlider = slider.closest('.sec-reviews').querySelector('.sec-reviews__btn-prev');

    const reviewsSwiper = new Swiper(slider, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 40,
      navigation: {
        nextEl: btnNextSlider,
        prevEl: btnPrevSlider,
      }
    })
  })
}
