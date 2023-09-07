const form = document.querySelector('#sign-up-form');
const sign_up = document.querySelector('.sign-up');
const success = document.querySelector('.success');
const dismiss_btn = document.querySelector('#dismiss_btn');
const recipient_email = document.querySelector('#recipent-email');

let email;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  email = form.email.value;
  form.email.value = '';
  recipient_email.innerHTML = email;
  sign_up.classList.add('sign-up--active');
  success.classList.add('success--active');
});

dismiss_btn.addEventListener('click', () => {
  success.classList.remove('success--active');
  sign_up.classList.remove('sign-up--active');
});
