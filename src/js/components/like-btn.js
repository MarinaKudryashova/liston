const likeBtns = document.querySelectorAll('.product-card__like');

likeBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();

    btn.classList.toggle('active')
  })
})
