import throttle from 'lodash.throttle';

const FEEDBACK_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');

populateForm();

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(formRef);
  formData.forEach((value, name) => console.log(value, name));
  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_KEY);
}

function onFormInput(e) {
  let inputForm = localStorage.getItem(FEEDBACK_KEY);
  inputForm = inputForm ? JSON.parse(inputForm) : {};
  inputForm[e.target.name] = e.target.value;
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(inputForm));
}

// function populateForm() {
//   let inputForm = localStorage.getItem(FEEDBACK_KEY);
//   inputForm = JSON.parse(inputForm);
// }

function populateForm() {
  let inputForm = localStorage.getItem(FEEDBACK_KEY);
  if (inputForm) {
    inputForm = JSON.parse(inputForm);
    Object.entries(inputForm).forEach(([name, value]) => {
      formRef.elements[name].value = value;
    });
  }
}

// const FEEDBACK_KEY = 'feedback-form-state';

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// populateTextarea();

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   evt.currentTatget.reset();
//   localStorage.removeItem(FEEDBACK_KEY);
// }

// function onTextareaInput(evt) {
//   const message = evt.target.value;
//   localStorage.setItem(FEEDBACK_KEY, message);
// }

// function populateTextarea() {
//   const saveMessage = localStorage.getItem(FEEDBACK_KEY);
//   if (saveMessage) {
//     refs.textarea.value = saveMessage;
//   }
// }
