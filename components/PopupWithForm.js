import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popup, handleSubmitForm) {
    super(popup);
    this._handleSubmitForm = handleSubmitForm;
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._form = this._popup.querySelectorAll('.popup__form');
  }

_getInputValues() {
  this._formValues = {};
  this._inputList.forEach(input => {
    this._formValues[input.name] = input.value;
  });
  return this._formValues;
}

setInputValues(data) {
this._inputList.forEach((input) => {
  input.value = data[input.name];
})
}

close() {
  this._form.reset;
  super.close();

}

setEventListeners() {
this._popup.addEventListener("submit", (e) => {
  e.preventDefault();
  this._handleSubmitForm(this._getInputValues());
  this.close();
});
super.setEventListeners();
}
}
