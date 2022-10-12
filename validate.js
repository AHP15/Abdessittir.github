
const form = document.querySelector('.contact-form');

function hasValue(text) {
    return text.trim().length > 0;
}

function validateUsername(username) {
  const itHasValue = hasValue(username.value);

  if(!itHasValue) {

  }

  const maxLength = username.value.length;

  if(maxLength > 30) {

  }
}

function validateEmail(email) {
  const itHasValue = hasValue(email.value);

  if(!itHasValue) {

  }

  const emailValue = email.value.trim();
  const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isLowerCase = /[A-Z]/;

  if (!regexp.test(email) && isLowerCase.test(email)) {

  }

}

function validateMessage(message) {
    const itHasValue = hasValue(message.value);
    if(!itHasValue) {

    }

    const maxLength = message.value.length;

    if(maxLength > 500) {
        
    }
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