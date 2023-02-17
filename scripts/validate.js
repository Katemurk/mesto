//валидация
let selectors = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_type_visible",
};

//показываем ошибку
const showInputError = (selectors, formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(selectors.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(selectors.errorClass);
};

//скрываем ошибку
const hideInputError = (selectors, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(selectors.inputErrorClass);
  errorElement.classList.remove(selectors.errorClass);
  errorElement.textContent = "";
};

//выборка для хайда ошибки
const isValid = (selectors, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(
      selectors,
      formElement,
      inputElement,
      inputElement.validationMessage
    );
  } else {
    hideInputError(selectors, formElement, inputElement);
  }
};

const setEventListeners = (selectors, formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(selectors.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    selectors.submitButtonSelector
  );
  toggleButtonState(selectors, inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(selectors, formElement, inputElement);

      toggleButtonState(selectors, inputList, buttonElement);
    });
  });
};

// кнопка сабмита туда сюда
const toggleButtonState = (selectors, inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(selectors.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(selectors.inactiveButtonClass);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const enableValidation = () => {
  const formList = Array.from(
    document.querySelectorAll(selectors.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (event) {
      event.preventDefault();
    });
    setEventListeners(selectors, formElement);
  });
};

enableValidation(selectors);
