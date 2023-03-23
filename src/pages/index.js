import "../pages/index.css";
import {
  initialCards,
  validationConfig,
  popupProfile,
  popupCards,
  popupView,
  btnOpenProfile,
  btnOpenCards,
  cardsContainer,
  nameProfile,
  jobProfile,
  formValidators
} from "../utils/constants.js";

import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

//общее создание карточки из конструктора класса кард

function createCard(item) {
  const card = new Card(item, ".card-template", handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}
// вставляем в ДОМ
function renderCard(item) {
  const cardElement = createCard(item);
  return cardElement;
}

const cardSection = new Section(
  { items: initialCards, renderer: renderCard },
  cardsContainer
);
cardSection.renderItems();

function handleCardClick(data) {
  popupImage.open(data);
}

//инстанс попапа профиля
function submitEditProfile({ hero, profession }) {
  userInfo.setUserInfo({ hero, profession });
  // popupWithProfile.setInputValues(userInfo.getUserInfo());
  // popupWithProfile.open();
}

const userInfo = new UserInfo({ nameProfile, jobProfile });
const popupWithProfile = new PopupWithForm(popupProfile, submitEditProfile);
popupWithProfile.setEventListeners();

//инстанс попапа изображения
const popupImage = new PopupWithImage(popupView);
popupImage.setEventListeners();

// инстанс попапа формы добавления картинок
function submitAddCard({ name, link }) {
  cardSection.addItem(createCard({ name: name, link: link }));
}

const popupWithCard = new PopupWithForm(popupCards, submitAddCard);
popupWithCard.setEventListeners();

//открытие попапов
btnOpenProfile.addEventListener("click", () => {
  formValidators["profileForm"].resetValidation();
  popupWithProfile.setInputValues(userInfo.getUserInfo());
  popupWithProfile.open();
});

btnOpenCards.addEventListener("click", () => {
  formValidators["cardForm"].resetValidation();
  popupWithCard.open();
});

//валидация
// function getValidator(formElement) {
//   const validation = new FormValidator(validationConfig, formElement);
//   return validation;
// }

// getValidator(profileForm).enableValidation();
// getValidator(cardForm).enableValidation();

// Включение валидации
const enableValidation = (validationConfig) => {
  const formList = Array.from(
    document.querySelectorAll(validationConfig.formSelector)
  );
  formList.forEach((formElement) => {
    const validator = new FormValidator(validationConfig, formElement);
    const formName = formElement.getAttribute("name");

    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationConfig);
