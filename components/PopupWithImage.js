import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup)
    this._popupImg = this._popup.querySelector(".popup__img")
    this._popupImgName = this._popup.querySelector(".popup__caption")

  }
open(data) {
  this._popupImg.src = data.link;
  this._popupImg.alt = data.name;
  this._popupImgName.textContent = data.name;
super.open();
}

}
