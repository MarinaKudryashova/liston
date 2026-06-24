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
      slidesPerView: 1,
      spaceBetween: 40,
      autoplay: true,
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
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: btnNextSlider,
        prevEl: btnPrevSlider,
      },
      breakpoints: {
        1440: {
          slidesPerView: 3.3,
          spaceBetween: 20,
        }
      }
    })
  })
}
