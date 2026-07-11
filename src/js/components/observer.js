// Итого в корзине
document.addEventListener('DOMContentLoaded', () => {
  const mobileTotal = document.querySelector('.cart-content__order-fixed');
  const orderBlock = document.querySelector('.cart-content__order');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        mobileTotal.classList.toggle('visible', !entry.isIntersecting)
      });
    },
    {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0
    }
  )

  if(orderBlock) {
    observer.observe(orderBlock)
  }
})

 // ===== МОБИЛЬНАЯ ПАНЕЛЬ ТОВАРА (через скролл) =====
document.addEventListener('DOMContentLoaded', () => {
  const bar = document.getElementById('mobileProductBar');

  if (!bar || window.innerWidth >= 768) return;

  // Наблюдаем за блоком с ценой через скролл
  const infoBlock = document.querySelector('.single-services__info');

  if (!infoBlock) return;

  let isVisible = false;

  window.addEventListener('scroll', () => {
    const rect = infoBlock.getBoundingClientRect();
    // Блок ушёл за верхнюю границу экрана
    const shouldShow = rect.bottom < 200;

    if (shouldShow && !isVisible) {
      bar.classList.add('is-visible');
      isVisible = true;
      console.log('📱 Панель показана (scroll)');
    } else if (!shouldShow && isVisible) {
      bar.classList.remove('is-visible');
      isVisible = false;
      console.log('📱 Панель скрыта (scroll)');
    }
  });

  // Дублируем цену
  function updateBarData() {
    const currentPrice = document.querySelector('.single-services__info .prices__current');
    const oldPrice = document.querySelector('.single-services__info .prices__old');

    const barCurrent = bar.querySelector('.mobile-product-bar__current');
    const barOld = bar.querySelector('.mobile-product-bar__old');

    if (currentPrice && barCurrent) {
      barCurrent.textContent = currentPrice.textContent;
    }
    if (oldPrice && barOld) {
      barOld.textContent = oldPrice.textContent;
    }
  }

  updateBarData();

  console.log('✅ Мобильная панель товара готова (через scroll)');
});
