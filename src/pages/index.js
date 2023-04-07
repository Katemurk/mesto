import "../pages/index.css";
import {
  validationConfig,
  popupProfile,
  popupCards,
  popupView,
  btnOpenProfile,
  btnOpenCards,
  cardsContainer,
  nameProfile,
  jobProfile,
  formValidators,
  btnOpenAvatar,
  popupAvatar,
  imgProfile,
  popupConfirm,
} from "../utils/constants.js";

import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";

let userId;

//инстанс апи
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-63/",
  headers: {
    authorization: "8a88ecbc-dc1c-499d-af88-db3d07049f66",
    "Content-Type": "application/json",
  },
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([data, items]) => {
    userId = data._id;
    userInfo.setUserInfo({ hero: data.name, profession: data.about });
    userInfo.setAvatar(data.avatar);

    cardSection.renderItems(items);
  })
  .catch((err) => console.log(err));

// вставляем в ДОМ
function renderCard(item) {
  const cardElement = new Card(
    item,
    userId,
    {
      openPreview: (name, link) => {
        popupImage.open(name, link);
      },
      handleTrashClick: (_id) => {
        popupWithConfirm.open();

        popupWithConfirm.setHandleSubmitForm(() => {
          popupWithConfirm.renderLoading(true);
          api
            .deleteCard(_id)
            .then(() => {
              popupWithConfirm.close();
              cardElement.removeCard();
            })
            .catch((err) => console.log(err))
            .finally(() => {
              popupWithConfirm.renderLoading(false);
            });
        });
      },
      handleGetLike: (_id) => {
        api
          .putLike(_id)
          .then((item) => {
            cardElement.toggleLike(item);
          })
          .catch((err) => console.log(err));
      },
      handleDeleteLike: (_id) => {
        api
          .deleteLike(_id)
          .then((item) => {
            cardElement.toggleLike(item);
          })
          .catch((err) => console.log(err));
      },
    },
    ".card-template"
  );
  const card = cardElement.generateCard();
  return card;
}
const cardSection = new Section(renderCard, cardsContainer);

// инстанс попапа формы добавления картинок
function submitAddCard({ name, link }) {
  popupWithCard.renderLoading(true);
  api
    .setCard({ name: name, link: link })
    .then((item) => {
      cardSection.addItem(renderCard(item));
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupWithCard.renderLoading(false);
    });
}

//инстанс попапа профиля

const userInfo = new UserInfo({ nameProfile, jobProfile, imgProfile });

function submitEditProfile(info) {
  popupWithProfile.renderLoading(true);
  api
    .setUserInfo(info)
    .then((user) => {
      userInfo.setUserInfo({ hero: user.name, profession: user.about });
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupWithProfile.renderLoading(false);
    });
}

const popupWithProfile = new PopupWithForm(popupProfile, submitEditProfile);
popupWithProfile.setEventListeners();

// инстанс попапа аватарки
function submitAddAvatar({ link }) {
  popupWithAvatar.renderLoading(true);
  api
    .setAvatar(link)
    .then((url) => {
      userInfo.setAvatar(url.avatar);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupWithAvatar.renderLoading(false);
    });
}

//инстанс попапа изображения
const popupImage = new PopupWithImage(popupView);
popupImage.setEventListeners();

const popupWithCard = new PopupWithForm(popupCards, submitAddCard);
popupWithCard.setEventListeners();

const popupWithAvatar = new PopupWithForm(popupAvatar, submitAddAvatar);
popupWithAvatar.setEventListeners();

const popupWithConfirm = new PopupWithConfirmation(popupConfirm);
popupWithConfirm.setEventListeners();

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

btnOpenAvatar.addEventListener("click", () => {
  formValidators["avatarForm"].resetValidation();
  popupWithAvatar.open();
});

//валидация
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
