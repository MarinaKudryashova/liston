document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.sec-about__link').forEach((btn) => {
    const parentSection = btn.closest('.sec-about');
    const hiddenText = parentSection ? parentSection.querySelector('.sec-about__text') : null;

    if (!hiddenText) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation()
      e.preventDefault()

      hiddenText.classList.toggle('expanded')
    })
  })
})
