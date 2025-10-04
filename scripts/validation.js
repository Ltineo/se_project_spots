const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const showInputError = (formEl, inputEl, errorMsg,config) => {
  const errormgsEl = formEl.querySelector(`#${inputEl.id}-error`);
  errormgsEl.textContent = errorMsg;
  inputEl.classList.add("modal__input_type_error");
};

const hideInputError = (formEl, inputEl,config) => {
  const errormgsEl = formEl.querySelector(`#${inputEl.id}-error`);
  errormgsEl.textContent = "";
  inputEl.classList.remove("modal__input_type_error");
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
  disabledButton(buttonEl);
  } else {
    buttonEl.disabled = false;
    buttonEl.classList.remove("modal__button_disabled");
}};

const disabledButton = (buttonEl) => {
  buttonEl.disabled = true;
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
})};

