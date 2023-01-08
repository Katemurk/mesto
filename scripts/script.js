let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__toggle');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__item_type_name');
let jobInput = document.querySelector('.popup__item_type_profession');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__caption');

function openPopup() {
    nameInput.value = nameProfile.textContent; 
    jobInput.value = jobProfile.textContent; 
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopup();
}

popupOpen.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit); 
