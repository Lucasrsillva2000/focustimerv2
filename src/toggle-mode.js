let darkMode = true
const buttonToggle = document.querySelector('#toggle-mode')

buttonToggle.addEventListener('click', event => {
  document.documentElement.classList.toggle(
    'light'
  ) /*se não tiver o light ele vai adicionar, se tiver ele tira*/

  const mode = darkMode
    ? 'light'
    : 'dark' /*quando eu clicar no botão, vai observar que o mode é dark então(?) vai ser 'light' se não (:) vai ser dark*/

  event.currentTarget.querySelector(
    'span'
  ).textContent = `${mode} mode ativado` /*o botão que é o currentTarget dessa situação*/

  darkMode = !darkMode /*uma troca facil de valores booleanos*/
})
