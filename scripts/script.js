// popups
const popupProfile = document.querySelector(".popup_type_profile");
const popupCards = document.querySelector(".popup_type_cards");
const popupView = document.querySelector(".popup_type_view");

//popups close buttons
const closeButtons = document.querySelectorAll(".popup__toggle");

// popups open button
const popupOpenProfile = document.querySelector(".profile__edit-button");
const popupOpenCards = document.querySelector(".profile__add-button");
const popupOpenView = document.querySelector(".popup__img");

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

const profileForm = document.forms['profileForm'];
const profileCard = document.forms['cardForm'];
const cardTemplate = document.querySelector(".card-template").content;

/* подгрузка карточки из массива*/

function renderCards() {
  initialCards.forEach(createCard);
}
renderCards();

/* заготовка карточки */

function getCard(item) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const image = cardElement.querySelector(".card__img");
  const trashButton = cardElement.querySelector(".card__trash-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  cardElement.querySelector(".card__name").textContent = item.name;
  image.src = item.link;
  image.alt = item.name;

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  trashButton.addEventListener("click", () => {
    cardElement.remove();
  });

  image.addEventListener("click", () => {
    popupImg.src = item.link;
    popupImgName.textContent = item.name;
    popupImg.alt = item.name;
    openPopup(popupView);
  });
  return cardElement;
}
/* пуш карточки на сайт*/

function createCard(item) {
  const cardElement = getCard(item);
  cardList.prepend(cardElement);
}

//открытие попапов

const openPopup = function (popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscape);
  document.addEventListener("mousedown", handleOverlay);
};

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
  const name = placeInput.value;
  const link = linkInput.value;
  createCard({ name, link });
  closePopup(popupCards);
  profileCard.reset();
});
