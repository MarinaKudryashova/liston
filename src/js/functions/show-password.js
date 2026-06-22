export function passwordView() {
  const passwordBtns = document?.querySelectorAll('[data-show-password]');
  if(!passwordBtns.length) return;

  passwordBtns.forEach(btn=> {
    btn.addEventListener('click', function (e) {
      const inputId = btn.getAttribute('aria-controls');
      const password = inputId ? document.getElementById(inputId) : btn.closest('.input-wrapper')?.querySelector('input[type="password"]');

      if (!password) return;

      const isPassword = password.type === 'password';
      password.type = isPassword ? 'text' : 'password';
      btn.dataset.showPassword = !isPassword ? 'false' : 'true';
      btn.setAttribute('aria-label', !isPassword ? 'Скрыть пароль' : 'Показать пароль');
    });
  });
}

