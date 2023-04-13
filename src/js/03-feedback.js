import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const key = 'feedback-form-state';
const saveFormStateToLocalStorage = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(key, JSON.stringify(formState));
}, 500);

form.addEventListener('input', saveFormStateToLocalStorage);

const formStateFromLocalStorage = JSON.parse(
  localStorage.getItem(key)
);
if (formStateFromLocalStorage) {
  emailInput.value = formStateFromLocalStorage.email;
  messageInput.value = formStateFromLocalStorage.message;
}
form.addEventListener('submit', event => {
  event.preventDefault();
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formState);
  localStorage.removeItem(key);
  emailInput.value = '';
  messageInput.value = '';
});
