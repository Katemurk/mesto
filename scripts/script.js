// popups
const popupProfile = document.querySelector('.popup_type_profile');
const popupCards = document.querySelector('.popup_type_cards');
const popupView = document.querySelector('.popup_type_view');

//popups close buttons
const popupCloseProfile = popupProfile.querySelector('.popup__toggle');
const popupCloseCards = popupCards.querySelector('.popup__toggle');
const popupCloseView = popupView.querySelector('.popup__toggle');

// popups open button
const popupOpenProfile = document.querySelector('.profile__edit-button');
const popupOpenCards = document.querySelector('.profile__add-button');
const popupOpenView = document.querySelector('.popup__img');

// кнопки сабмитов
const popupSubmitProfile = popupProfile.querySelector('.popup__button');
const popupSubmitCards = popupCards.querySelector('.popup__button');

/* */
const nameInput = document.querySelector('.popup__item_type_name');
const jobInput = document.querySelector('.popup__item_type_profession');
const placeInput = document.querySelector('.popup__item_type_place');
const linkInput = document.querySelector('.popup__item_type_link');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__caption');
const cardList = document.querySelector('.grid-elements__list');

/* подгрузка карточки из массива*/

function renderCards() {
  initialCards.forEach((item) => {
    createCard(item);
  });
}
renderCards();

/* визуализация карточки на сайте с лайками и удалением*/

function createCard(item) {
  const cardTemplate = document.querySelector('.card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__name').textContent = item.name;
  cardElement.querySelector('.card__img').src = item.link;
  cardElement.querySelector('.card__img').alt = item.name;
  cardList.prepend(cardElement);

  const likeButton = document.querySelector('.card__like-button');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('card__like-button_active');
  })

  const trashButton = document.querySelector('.card__trash-button');
  trashButton.addEventListener('click', () => {
    cardElement.remove();
  })

  const image = document.querySelector('.card__img');
  const popupImg = document.querySelector('.popup__img');
  const popupImgName = document.querySelector('.popup__caption');
  image.addEventListener('click', () => {
    popupImg.src = item.link;
    popupImgName.textContent = item.name;
    popupImgName.alt = item.name;
    togglePopup(popupView);

  })
  }

//открытие попапов
const togglePopup = function (popup) {
  popup.classList.toggle('popup_opened');
}

popupOpenProfile.addEventListener('click', function () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  togglePopup(popupProfile);
})

popupOpenCards.addEventListener('click', function () {
  togglePopup(popupCards);
})
popupOpenView.addEventListener('click', function () {
  togglePopup(popupView);
})

//закрытие попапов
popupCloseProfile.addEventListener('click', function () {
  togglePopup(popupProfile);
})
popupCloseCards.addEventListener('click', function () {
  togglePopup(popupCards);
})

popupCloseView.addEventListener('click', function () {
  togglePopup(popupView);
})

/* сабмит в попап профиля */

const submitPopupProfile = popupSubmitProfile.addEventListener('click', (evt) => {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  togglePopup(popupProfile);

})

/* сабмит в карточки */

const submitPopupCards = popupSubmitCards.addEventListener('click', (evt) => {
  evt.preventDefault();
  const title = placeInput.value;
  const link = linkInput.value;
  const card = createCard({name: title, link: link});
  placeInput.value = '';
  linkInput.value = '';
  togglePopup(popupCards);

 })
