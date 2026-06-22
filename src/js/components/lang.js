const lang = document.querySelector('.lang');
const btn = lang.querySelector('.lang__current');
const list = lang.querySelector('.lang__list');

btn.addEventListener('click', () => {
  const isOpen = lang.classList.toggle('is-open');

  if(isOpen) {
    list.style.maxHeight = `${list.scrollHeight + 12}px`
  } else {
    list.style.maxHeight = '0px';
  }
})
