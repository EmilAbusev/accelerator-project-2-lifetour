const form = document.querySelector('.form__body');
const formInput = form.querySelectorAll('input');
const inputPhone = form.querySelector('[data-form="phone"]');
const inputEmail = form.querySelector('[data-form="email"]');

form.setAttribute('required', true);
form.setAttribute('novalidate', true);


const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|^[a-zA-Z0-9._%+-]+@[а-яА-ЯёЁ0-9.-]+\.[рф]{2,3}$/;
  return re.test(String(email).toLowerCase());
};

const validatePhone = (phone) => {
  const re = /^[0-9\s]*$/;
  return re.test(String(phone).toLowerCase());
};

form.onsubmit = () => {
  const phoneVal = inputPhone.value;
  const emailVal = inputEmail.value;
  const emptyInputs = Array.from(formInput).filter((input) => input.value === '');

  formInput.forEach((input) => {
    if (input.value === '') {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });

  if (emptyInputs.length !== 0) {
    return false;
  }

  if (!validatePhone(phoneVal)) {
    inputPhone.classList.add('error');
    return false;
  } else {
    inputPhone.classList.remove('error');
  }

  if (!validateEmail(emailVal)) {
    inputEmail.classList.add('error');
    return false;
  } else {
    inputEmail.classList.remove('error');
  }
};
