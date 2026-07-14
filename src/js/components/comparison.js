document.querySelectorAll('[data-tabs="comparison-tabs"] .tabs__panel').forEach((panel) => {

  const tableWrapper = panel.querySelector('.compare__table-wrapper');
  const stickyTrack = panel.querySelector('.compare__sticky-track');
  const sticky = panel.querySelector('.compare__sticky-wrap');
  const firstRow = panel.querySelector('.first-row');
  const table = panel.querySelector('.compare__table');

  if (!tableWrapper || !stickyTrack || !sticky || !firstRow || !table) return;

  // Шаг прокрутки
  const getStep = () => {
    const column = panel.querySelector('.first-row th:not(.fixed)');
    return column ? column.offsetWidth : 0;
  };

  // Кнопки
  const scroll = (direction) => {
    tableWrapper.scrollBy({
      left: direction * getStep(),
      behavior: 'smooth'
    });
  };

  panel.querySelectorAll('.compare__btn-prev').forEach(btn => {
    btn.addEventListener('click', () => scroll(-1));
  });

  panel.querySelectorAll('.compare__btn-next').forEach(btn => {
    btn.addEventListener('click', () => scroll(1));
  });

  // Синхронизация горизонтального скролла
  let isSyncing = false;

  tableWrapper.addEventListener('scroll', () => {

    if (isSyncing) return;

    isSyncing = true;
    stickyTrack.scrollLeft = tableWrapper.scrollLeft;

    requestAnimationFrame(() => {
      isSyncing = false;
    });

  });

  stickyTrack.addEventListener('scroll', () => {

    if (isSyncing) return;

    isSyncing = true;
    tableWrapper.scrollLeft = stickyTrack.scrollLeft;

    requestAnimationFrame(() => {
      isSyncing = false;
    });

  });

  // Появление sticky
  const showOffset = -200;

  const toggleSticky = () => {

    const stickyTop = sticky.getBoundingClientRect().top;
    const stickyHeight = sticky.offsetHeight;

    const rowRect = firstRow.getBoundingClientRect();
    const tableRect = table.getBoundingClientRect();

    const show = rowRect.top <= stickyTop + showOffset;
    const hide = tableRect.bottom <= stickyTop + stickyHeight;

    sticky.classList.toggle('is-active', show && !hide);

  };

  window.addEventListener('scroll', toggleSticky, {
    passive: true
  });

  window.addEventListener('resize', toggleSticky);

  toggleSticky();

});
