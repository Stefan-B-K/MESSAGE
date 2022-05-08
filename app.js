const { hash } = window.location
const message = atob(hash.replace('#', ''))

if (message) {
  document.querySelector('#message-form').classList.add('hide')
  document.querySelector('#message-show').classList.remove('hide')
  document.querySelector('h3').innerHTML = message
}

document.querySelector('#message-form form').addEventListener('submit', event => {
  event.preventDefault()

  document.querySelector('#message-form').classList.add('hide')
  const outputForm = document.querySelector('#link-form')
  outputForm.classList.remove('hide')

  const input = document.querySelector('#message-input')
  const encrypted = btoa(input.value)

  const output = document.querySelector('#link-output')
  output.value = `${window.location}#${encrypted}`
  output.disabled = true

  document.querySelector('#link-form button').addEventListener('click', event => {
    output.disabled = false
    output.select()
    document.execCommand('copy')
  })

})