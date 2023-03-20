import '../pages/index.css';
import {
  initialCards,
  validationConfig,
  popupProfile,
  popupCards,
  popupView,
  btnOpenProfile,
  btnOpenCards,
  cardList,
  profileForm,
  cardForm,
  cardsContainer,
  nameProfile,
  jobProfile
} from "../utils/constants.js"

import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";


//общее создание карточки из конструктора класса кард

function renderCard(item) {
  const card = new Card(item, ".card-template", handleCardClick);
  const cardElement = card.generateCard();
  cardList.prepend(cardElement);
  cardForm.reset();
}

const cardSection = new Section(
  { items: initialCards, renderer: renderCard },
  cardsContainer
);
cardSection.renderItems();

function handleCardClick(data) {
  popupImage.setEventListeners();
  popupImage.open(data);
}

//инстанс попапа профиля
function submitEditProfile({ hero, profession }) {
  userInfo.setUserInfo({ hero, profession });
  popupWithProfile.setInputValues(userInfo.getUserInfo());
  popupWithProfile.open();
}

const userInfo = new UserInfo({ nameProfile, jobProfile });
const popupWithProfile = new PopupWithForm(popupProfile, submitEditProfile);
popupWithProfile.setEventListeners();

//инстанс попапа изображения
const popupImage = new PopupWithImage(popupView);

// инстанс попапа формы добавления картинок
function submitAddCard({ name, link }) {
  cardSection.addItem(renderCard({ name: name, link: link }));
}

const popupWithCard = new PopupWithForm(popupCards, submitAddCard);
popupWithCard.setEventListeners();

//открытие попапов
btnOpenProfile.addEventListener("click", () => {
    popupWithProfile.open();
  });

btnOpenCards.addEventListener("click", () => {
  popupWithCard.open();
});

//валидация
function getValidator(formElement) {
  const validation = new FormValidator(validationConfig, formElement);
  return validation;
}

getValidator(profileForm).enableValidation();
getValidator(cardForm).enableValidation();
const numbers = [2, 3, 5];

// Стрелочная функция. Не запнётся ли на ней Internet Explorer?
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // 4, 6, 10
