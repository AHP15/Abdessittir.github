
const form = document.querySelector('.contact-form');
const errorField = document.querySelector('.form-error');

function showErrorMessage(errorMessage) {
  errorField.style.display = 'flex';
  const errorEl = `<p>${errorMessage}</p>`
  errorField.insertAdjacentHTML('beforeend', errorEl);
}

function resetErrorField() {
  errorField.style.display = 'none';
  errorField.textContent = '';
}

function hasValue(text) {
    return text.trim().length > 0;
}

function validateUsername(username) {
  const itHasValue = hasValue(username.value);

  if(!itHasValue) {
    const error = 'Username field is empty.'
    showErrorMessage(error);
    return false;
  }

  const maxLength = username.value.length;

  if(maxLength > 30) {
    const error = 'Username must be less than 30 characters.'
    showErrorMessage(error);
    return false;
  }

  return true;
}

function validateEmail(email) {
  const emailValue = email.value.trim();
  const itHasValue = hasValue(emailValue);

  if(!itHasValue) {
    const error = 'Email field is empty.'
    showErrorMessage(error);
    return false;
  }

  const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isLowerCase = /[A-Z]/;

  if (!regexp.test(emailValue)) {
    const error = 'Email is invalid.'
    showErrorMessage(error);
    return false;
  }

  if (isLowerCase.test(emailValue)) {
    const error = 'Email must be in lowercase letters.'
    showErrorMessage(error);
    return false;
  }

  return true;
}

function validateMessage(message) {
  const itHasValue = hasValue(message.value);
  if(!itHasValue) {
    const error = 'Text message field is empty.'
    showErrorMessage(error);
    return false;
  }

  const maxLength = message.value.length;

  if(maxLength > 500) {
    const error = 'Text message must be less than 500 characters.'
    showErrorMessage(error);
    return false;
  }

  return true;
}

function handleSubmit(event) {
  event.preventDefault();
  const username = form.elements['username'];
  const email = form.elements['email'];
  const message = form.elements['message'];
  

  const isUsernameValid = validateUsername(username);
  const isEmailValid = validateEmail(email);
  const isMessageValid = validateMessage(message);

  //event.target.submit();
}
console.log(form);
form.addEventListener('submit', handleSubmit);
form.addEventListener('input', resetErrorField);
