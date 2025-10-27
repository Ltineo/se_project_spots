export const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inactiveButtonClass: "modal__submit-btn_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

export const showInputError = (formEl, inputEl, errorMsg, config) => {
  const errorEl = formEl.querySelector(`#${inputEl.id}-error`);
  errorEl.textContent = errorMsg;
  inputEl.classList.add(config.inputErrorClass);
  errorEl.classList.add(config.errorClass);
};

export const hideInputError = (formEl, inputEl, config) => {
  const errorEl = formEl.querySelector(`#${inputEl.id}-error`);
  errorEl.textContent = "";
  inputEl.classList.remove(config.inputErrorClass);
  errorEl.classList.remove(config.errorClass);
};

export const checkInputValidity = (formEl, inputEl, config) => {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage, config);
  } else {
    hideInputError(formEl, inputEl, config);
  }
};

export const hasInvalidInput = (inputList) =>
  inputList.some((input) => !input.validity.valid);

export const toggleButtonState = (inputList, buttonEl, config) => {
  if (hasInvalidInput(inputList)) {
    buttonEl.disabled = true;
    buttonEl.classList.add(config.inactiveButtonClass);
  } else {
    buttonEl.disabled = false;
    buttonEl.classList.remove(config.inactiveButtonClass);
  }
};

export const setEventListeners = (formEl, config) => {
  const inputList = Array.from(formEl.querySelectorAll(config.inputSelector));
  const buttonEl = formEl.querySelector(config.submitButtonSelector);

  toggleButtonState(inputList, buttonEl, config);

  inputList.forEach((inputEl) => {
    inputEl.addEventListener("input", () => {
      checkInputValidity(formEl, inputEl, config);
      toggleButtonState(inputList, buttonEl, config);
    });
  });
};

export const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formEl) => setEventListeners(formEl, config));
};

export const resetValidation = (formEl, inputList, config) => {
  inputList.forEach((inputEl) => hideInputError(formEl, inputEl, config));
  const buttonEl = formEl.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonEl, config);
};
