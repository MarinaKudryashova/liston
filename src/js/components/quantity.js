document.querySelectorAll('.quantity__btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    const input = this.parentElement.querySelector('.quantity__value');
    // const countCart = this.parentElement.parentElement.parentElement.querySelector('.add-to-cart__count');
    let value = parseInt(input.textContent);

    if (this.classList.contains('quantity__btn--minus')) {
      if (value > 1) {
        value--;
      }
    } else {
      value++;
    }

    if (value <= 1) {
      this.parentElement.querySelector('.quantity__btn--minus').setAttribute('disabled', 'true');
    } else {
      this.parentElement.querySelector('.quantity__btn--minus').removeAttribute('disabled');
    }

    // Обновляем значения
    input.textContent = value;
    // countCart.textContent = value;
  });
});
