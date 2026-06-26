document.addEventListener('DOMContentLoaded', () => {
  const fields = document.querySelectorAll('.form-field');

  fields.forEach(field => {
    const input = field.querySelector('.form-field__input');
    const clearBtn = field.querySelector('.form-field__btn-clear');

    if (!input || !clearBtn) return;

    // показываем/скрываем кнопку очистки
    const toggleState = () => {
      const hasValue = input.value.trim().length > 0;
      field.classList.toggle('form-field--filled', hasValue);
    };

    // при вводе текста
    input.addEventListener('input', toggleState);

    // очистка поля
    clearBtn.addEventListener('click', () => {
      input.value = '';
      input.focus();
      field.classList.remove('form-field--filled');
    });

    // начальное состояние (если есть автозаполнение)
    toggleState();
  });
});
