import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
  inputForm: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('.feedback-form [name="email"]'),
  inputText: document.querySelector('.feedback-form [name="message"]'),
};

let formData = {};

refs.inputForm.addEventListener('input', throttle(onFormInput, 500));
refs.inputForm.addEventListener('submit', onFormSubmit);

restoreFormData();

function onFormInput(evt) {   
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function restoreFormData() {
    const restoredFormData = localStorage.getItem(STORAGE_KEY);
    if (!restoredFormData) {
        return;
    }
      try {
          formData = JSON.parse(restoredFormData);  
      } catch (error) {
        console.log('Parsing error: ', error.message);
      }
    refs.inputEmail.value = formData.email ? formData.email : '';
    refs.inputText.value = formData.message ? formData.message : '';
}
