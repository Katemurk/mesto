let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile__button_edit');
let popupClose = document.querySelector('.popup__toggle');


popupOpen.addEventListener('click', function(e) {
    e.preventDefault();
    popup.classList.add('popup_opened');
})
popupClose.addEventListener('click', function(e) {
    e.preventDefault();
    popup.classList.remove('popup_opened');
}
)


let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__item_name_name');
let jobInput = document.querySelector('.popup__item_name_surname');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__caption');
   

function handleFormSubmit (evt) {
    evt.preventDefault();
    jobInput.value;
    nameInput.value;
    nameProfile.textContent = nameInput.value;jobInput.value;
    jobProfile.textContent = jobInput.value;

}

formElement.addEventListener('submit', handleFormSubmit); 
formElement.addEventListener('submit', function(e) {
    e.preventDefault();
    popup.classList.remove('popup_opened');
}
);