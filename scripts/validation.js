const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inactiveButtonClass: "modal__submit-btn_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const showInputError = (formEl, inputEl, errorMsg, config) => {
  const errormsgEl = formEl.querySelector(`#${inputEl.id}-error`);
  errormsgEl.textContent = errorMsg;
  inputEl.classList.add(config.inputErrorClass);
  errormsgEl.classList.add(config.errorClass); 
};

const hideInputError = (formEl, inputEl,config) => {
  const errormsgEl = formEl.querySelector(`#${inputEl.id}-error`);
  errormsgEl.textContent = "";
  inputEl.classList.remove(config.inputErrorClass);
  errormsgEl.classList.remove(config.errorClass);
};


const checkInputValidity = (formEl, inputEl,config) => {
  if (!inputEl.validity.valid) {
  showInputError(formEl, inputEl, inputEl.validationMessage, config);
} else {
    hideInputError(formEl, inputEl, config);
  }
};

const hasInvalidInput = (inputList,config) => {
  return inputList.some((inputEl) => {
    return !inputEl.validity.valid; 
  });
};


const toggleButtonState = (inputList, buttonEl, config) => {

  if (hasInvalidInput(inputList,config)) {
  disabledButton(buttonEl, config);
  } else {
    buttonEl.disabled = false;
    buttonEl.classList.remove(config.inactiveButtonClass);
}};

const disabledButton = (buttonEl, config) => {
  buttonEl.disabled = true;
  buttonEl.classList.add(config.inactiveButtonClass);
};

const resetValidation = (formEl, inputList,config) => {
  inputList.forEach((inputEl) => {
    hideInputError(formEl, inputEl,config);})
  };
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
const setEventsListeners = (formEl,config) => {
const inputList = Array.from(formEl.querySelectorAll(config.inputSelector));
const buttonElement = formEl.querySelector(config.submitButtonSelector);

  console.log(inputList);
  console.log(buttonElement);

  
  toggleButtonState(inputList, buttonElement,config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formEl, inputElement,config);
      toggleButtonState(inputList, buttonElement,config);
    });
  });
}

const enableValidation = (config) => {
const formlist = document.querySelectorAll(config.formSelector);
formlist.forEach(formElement => {
  setEventsListeners(formElement, config);
})}

enableValidation({
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inactiveButtonClass: "modal__submit-btn_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
})

