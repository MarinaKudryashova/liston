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
