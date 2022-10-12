const EMPTY_USERNAME = 'Username is required!';
const LONG_USERNAME = 'Username must be less than 30 characters!';

const EMPTY_EMAIL = 'Email is required!';
const INVALID_EMAIL = 'Email is invalid';
const UPPER_CASE_EMAIL = 'Email must be lowercase';

const EMPTY_MESSAGE = 'Message is required!';
const LONG_MESSAGE = 'Message must be less than 500 characters!';

const form = document.querySelector('.contact-form');
const errorField = document.querySelector('.form-error');

function showErrorMessage(errorText) {
  const errorEl = `<p>${errorText}</p>`;
  errorField.insertAdjacentHTML('beforeend', errorEl);
  errorField.classList.add('show-error');
}

function resetErrorField() {
  errorField.classList.remove('show-error');
  errorField.replaceChildren('');
}

function hasValue(text) {
  return text.trim().length > 0;
}

function validateUsername(username) {
  const itHasValue = hasValue(username.value);

  if (!itHasValue) {
    showErrorMessage(EMPTY_USERNAME);
    return false;
  }

  const maxLength = username.value.length;

  if (maxLength > 30) {
    showErrorMessage(LONG_USERNAME);
    return false;
  }

  return true;
}

function validateEmail(email) {
  const emailValue = email.value.trim();
  const itHasValue = hasValue(emailValue);

  if (!itHasValue) {
    showErrorMessage(EMPTY_EMAIL);
    return false;
  }

  const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isLowerCase = /[A-Z]/;

  if (!regexp.test(emailValue)) {
    showErrorMessage(INVALID_EMAIL);
    return false;
  }

  if (isLowerCase.test(emailValue)) {
    showErrorMessage(UPPER_CASE_EMAIL);
    return false;
  }

  return true;
}

function validateMessage(message) {
  const itHasValue = hasValue(message.value);
  if (!itHasValue) {
    showErrorMessage(EMPTY_MESSAGE);
    return false;
  }

  const maxLength = message.value.length;

  if (maxLength > 500) {
    showErrorMessage(LONG_MESSAGE);
    return false;
  }

  return true;
}

function handleSubmit(event) {
  event.preventDefault();
  resetErrorField();
  const [username, email, message] = form.elements;

  const isUsernameValid = validateUsername(username);
  const isEmailValid = validateEmail(email);
  const isMessageValid = validateMessage(message);

  if (isUsernameValid && isEmailValid && isMessageValid) {
    event.target.submit();
  }
}

form.addEventListener('submit', handleSubmit);
form.addEventListener('input', resetErrorField);
