import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form')

form.addEventListener('input', throttle(onInputHandler, 500))
form.addEventListener('submit', onSubmitHandler)

if (localStorage.getItem("feedback-form-state") !== null) {
  const parsedState = JSON.parse(localStorage.getItem("feedback-form-state"))

  form.email.value = parsedState.email
  form.message.value = parsedState.message
} else {
  form.email.value = ''
  form.message.value = ''
}

function onInputHandler(evt) {
  try {
    localStorage.setItem("feedback-form-state", JSON.stringify({
      email: evt.currentTarget.email.value,
      message: evt.currentTarget.message.value
    }))
  } catch (e) {
    console.log(e)
  }
}

function onSubmitHandler(evt) {
  evt.preventDefault()

  console.log(JSON.parse(localStorage.getItem("feedback-form-state")))

  form.email.value = ''
  form.message.value = ''

  localStorage.clear()
}
