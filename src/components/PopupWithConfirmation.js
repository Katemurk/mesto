import { Popup } from "./Popup.js";
export class PopupWithConfirmation extends Popup {
  constructor(popup) {
    super(popup);
    this._form = this._popup.querySelector(".popup__form");
    this._btn = this._popup.querySelector(".popup__button");
  }
  setHandleSubmitForm(handler) {
    this._handleSubmitForm = handler;
  }
  setEventListeners() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleSubmitForm({ id: this._id, items: this._item });
    });
    super.setEventListeners();
  }
  open(id, items) {
    super.open();
    this._id = id;
    this._items = items;
  }
  renderLoading(isLoading) {
    if (isLoading) {
      this._btn.textContent = "Удаление...";
    } else {
      this._btn.textContent = "Да";
    }
  }
}
