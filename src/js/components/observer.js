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

 // ===== МОБИЛЬНАЯ ПАНЕЛЬ ТОВАРА =====
document.addEventListener('DOMContentLoaded', () => {
  const bar = document.getElementById('mobileProductBar');

  // Только на мобилках и если панель есть
  if (!bar || window.innerWidth >= 768) return;

  // Наблюдаем за блоком с ценой
  const priceBlock = document.querySelector('.single-services__info .product-card__prices');

  if (priceBlock) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          bar.classList.toggle('is-visible', !entry.isIntersecting);
        });
      },
      { threshold: 0 }
    );
    observer.observe(priceBlock);
  }
});
