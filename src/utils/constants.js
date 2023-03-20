// export const thai = new URL("../images/cards/thailand.jpg", import.meta.url);
// const japan = new URL("../images/cards/japan.jpg", import.meta.url);
// const sri = new URL("../images/cards/sri.jpg", import.meta.url);
// const korea = new URL("../images/cards/korea.jpg", import.meta.url);

// const nepal = new URL("../images/cards/nepal.jpg", import.meta.url);
export const initialCards = [
  {
    name: 'Индия',
    link: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'Тайланд',
    link: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
  },
  {
    name: 'Япония',
    link: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
  },
  {
    name: 'Шри-Ланка',
    link: 'https://images.unsplash.com/photo-1638434369239-a4f6cd1dbbb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    name: 'Корея',
    link: 'https://images.unsplash.com/photo-1603852452515-2dc92bd9c6f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
  },
  {
    name: 'Непал',
    link: 'https://images.unsplash.com/photo-1580424917967-a8867a6e676e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
  }
];

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

// popups open button
export const btnOpenProfile = document.querySelector(".profile__edit-button");
export const btnOpenCards = document.querySelector(".profile__add-button");

//* */
export const cardList = document.querySelector(".grid-elements__list");
export const profileForm = document.forms["profileForm"];
export const cardForm = document.forms["cardForm"];
export const cardsContainer = ".grid-elements";
export const nameProfile = ".profile__name";
export const jobProfile = ".profile__caption";
