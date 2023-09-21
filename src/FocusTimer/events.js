import { controls } from './elements.js'
import * as actions from './actions.js'
import * as el from './elements.js'
import state from './state.js'
import { updateDisplay } from './timer.js'

export function registerControls() {
  controls.addEventListener('click', event => {
    const action = event.target.dataset.action
    if (typeof actions[action] != 'function') {
      return //quando encontra o return ela para de executar
    }

    actions[action]()
  })
}

export function setMinutes() {
  el.minutes.addEventListener('focus', () => {
    el.minutes.textContent = ''
  })

  el.minutes.onkeypress = event => /\d/.test(event.key)

  el.minutes.addEventListener('blur', event => {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time //time é maior que 60? se sim mantem como 60 se nao deixa como time (: é senao)

    state.minutes = time
    state.seconds = 0

    updateDisplay()
    el.minutes.removeAttribute('contenteditable')
  })
}
