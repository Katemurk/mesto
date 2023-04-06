export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_type_visible",
};

// popups

export const popupProfile = document.querySelector(".popup_type_profile");
export const popupCards = document.querySelector(".popup_type_cards");
export const popupView = document.querySelector(".popup_type_view");
export const popupAvatar = document.querySelector(".popup_type_change");
export const popupConfirm = document.querySelector(".popup_type_confirm");

// popups open button
export const btnOpenProfile = document.querySelector(".profile__edit-button");
export const btnOpenCards = document.querySelector(".profile__add-button");
export const btnOpenAvatar = document.querySelector(".profile__change-button");
export const btnDelete = document.querySelector('.card__trash-button')
//* */
export const profileForm = document.forms["profileForm"];
export const cardForm = document.forms["cardForm"];
export const avatarForm = document.forms["avatarForm"];
export const formValidators = {profileForm, cardForm, avatarForm};
export const imgProfile = ".profile__image";
export const cardsContainer = ".grid-elements__list";
export const nameProfile = ".profile__name";
export const jobProfile = ".profile__caption";


