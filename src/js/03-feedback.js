const throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', throttle(onInputClick, 500));
refs.form.addEventListener('submit', onSubmitClick);
document.addEventListener('DOMContentLoaded', onDOMContentLoaded);

const feedbackFormState = {
  email: '',
  message: '',
};
function onInputClick(event) {
  const { email, message } = event.currentTarget.elements;
  if (email || message) {
    feedbackFormState.email = email.value;
    feedbackFormState.message = message.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
  }
}
function onDOMContentLoaded() {
  if (localStorage.getItem('feedback-form-state')) {
    try {
      const parsedFeedback = JSON.parse(localStorage.getItem('feedback-form-state'));
      refs.form.elements.email.value = parsedFeedback.email;
      refs.form.elements.message.value = parsedFeedback.message;
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
    }
  }
}

function onSubmitClick(event) {
  event.preventDefault();
  console.log(feedbackFormState.email);
  console.log(feedbackFormState.message);
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
}
