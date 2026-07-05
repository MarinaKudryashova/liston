document.querySelectorAll('[data-tabs="comparison-tabs"]').forEach((tabs) => {

  tabs.querySelectorAll('.tabs__panel').forEach((panel) => {

    const list = panel.querySelector('.compare__product-list');
    const prevBtn = panel.querySelector('.compare__btn-prev');
    const nextBtn = panel.querySelector('.compare__btn-next');

    if (!list || !prevBtn || !nextBtn) return;

    const getStep = () => {
      const card = panel.querySelector('.compare__product-item');
      if (!card) return 0;

      const cardWidth = card.offsetWidth;

      const styles = window.getComputedStyle(list);
      const gap = parseInt(styles.gap || 0, 10);

      return cardWidth + gap;
    }

    const scrollToStep = (direction) => {
      const step = getStep();

      const maxScroll = list.scrollWidth - list.clientWidth;

      let next = list.scrollLeft + direction * step;

      next = Math.max(0, Math.min(next, maxScroll));

      list.scrollTo({
        left: next,
        behavior: 'smooth'
      })
    }

    prevBtn.addEventListener('click', () => {
      scrollToStep(-1);
    });

    nextBtn.addEventListener('click', () => {
      scrollToStep(1);
    });
  })
})
