const lang = document.querySelector('.lang');
const btn = lang.querySelector('.lang__current');
const list = lang.querySelector('.lang__list');

btn.addEventListener('click', () => {
  const isOpen = lang.classList.toggle('is-open');

  if(isOpen) {
    list.style.maxHeight = `${list.scrollHeight}px`
  } else {
    list.style.maxHeight = '0px';
  }
})

// клик вне компонента
document.addEventListener('click', (e) => {
  const isClickInside = lang.contains(e.target);

  if (!isClickInside && lang.classList.contains('is-open')) {
    lang.classList.remove('is-open');
    list.style.maxHeight = '0px';
  }
});
