export class Popup {
  constructor(popup) {
    this._popup = popup;
    this._closeButton = this._popup.querySelector(".popup__toggle");
    this._handleEscClose = this._handleEscClose.bind(this)

  }

  open() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.classList.add("popup_opened");
  }

  close() {
    document.removeEventListener("keydown", this._handleEscClose);
    this._popup.classList.remove("popup_opened");
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup")) {
        this.close();
      }
    });
    this._closeButton.addEventListener("click", () => {
      this.close();
    });
  }
}
