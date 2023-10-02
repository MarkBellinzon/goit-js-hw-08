import throttle from 'lodash.throttle';

const FEEDBACK_KEY = 'feedback - form - state';
const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(onFormSnput, 500));
formRef.addEventListener('submit', onFormSubmit);

function onFormSnput(e) {}

function onFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(formRef);
  formData.forEach((value, name) => console.log(value, name));
  e.currentTarget.reset();
  licalStorage.removeItem(FEEDBACK_KEY);
}
