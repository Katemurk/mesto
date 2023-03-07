import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import { initialCards } from "./initialCards.js";

const selectors = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_type_visible",
};
// popups
const popupProfile = document.querySelector(".popup_type_profile");
const popupCards = document.querySelector(".popup_type_cards");
const popupView = document.querySelector(".popup_type_view");

//popups close buttons
const closeButtons = document.querySelectorAll(".popup__toggle");

// popups open button
const popupOpenProfile = document.querySelector(".profile__edit-button");
const popupOpenCards = document.querySelector(".profile__add-button");

/* */
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_profession");
const placeInput = document.querySelector(".popup__input_type_place");
const linkInput = document.querySelector(".popup__input_type_link");
const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__caption");
const cardList = document.querySelector(".grid-elements__list");
const popupImg = document.querySelector(".popup__img");
const popupImgName = document.querySelector(".popup__caption");
const profileForm = document.forms["profileForm"];
const profileCard = document.forms["cardForm"];

//общее создание карточки из конструктора класса /кард
function createCard(item) {
  const card = new Card(item, ".card-template", openPreview);
  const cardElement = card.generateCard();
  cardList.prepend(cardElement);
}

//создание из массива объектов
function renderCards() {
  initialCards.forEach(createCard);
}
renderCards();

/* пуш карточки на сайт*/
// initialCards.forEach((item) => {
// const card = new Card(item, '.card-template');
// const cardElement = card.generateCard();
// document.querySelector('.grid-elements__list').append(cardElement);

// });

//открытие попапов

const openPopup = function (popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscape);
  document.addEventListener("mousedown", handleOverlay);
};

function openPreview(item) {
  popupImg.alt = item.name;
  popupImgName.textContent = item.name;
  popupImg.src = item.link;
  openPopup(popupView);
}

popupOpenProfile.addEventListener("click", function () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupProfile);
});

popupOpenCards.addEventListener("click", function () {
  openPopup(popupCards);
});

//закрытие попапов

const closePopup = function (popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscape);
  document.removeEventListener("mousedown", handleOverlay);
};

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => {
    closePopup(popup);
  });
});

// закрытие по esc

const handleEscape = function (evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
};
// закрытие по оверлею

const handleOverlay = function (evt) {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  }
};

/* сабмит в попап профиля */

profileForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupProfile);
});
/* сабмит в карточки изображений*/
profileCard.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newObj = {
    name: placeInput.value,
    link: linkInput.value,
  };
  createCard(newObj);
  closePopup(popupCards);
  profileCard.reset();
});

//валидация
function getValid(formElement) {
  const validation = new FormValidator(selectors, formElement);
  return validation;
}
getValid(profileForm).enableValidation();
getValid(profileCard).enableValidation();
