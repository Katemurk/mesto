/* заготовка карточки */
export class Card {
  constructor(item, templateSelector, openPreview) {
    // this._link = data.link;
    // this._name = data.name;
    this._item = item;
    this._templateSelector = templateSelector;
    this._openPreview = openPreview;
  }
  // DOM-элемент карточки
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }
  //сгенерируем карточку и все ее части
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".card__name").textContent = this._item.name;
    this._image = this._element.querySelector(".card__img");
    this._image.src = this._item.link;
    this._image.alt = this._item.name;
    this._like = this._element.querySelector(".card__like-button");
    this._trash = this._element.querySelector(".card__trash-button");

    this._setEventListeners();
    return this._element;
  }

  //навешаем слушателей на кнопки и клики
  _setEventListeners() {
    this._image.addEventListener("click", () => {
      this._openPreview(this._item);
    });

    this._like.addEventListener("click", () => {
      this._getLike();
    });

    this._trash.addEventListener("click", () => {
      this._deleteCard();
    });
  }
  //отдельная функция на лайк
  _getLike() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  //отдельная функция на удаление
  _deleteCard() {
    this._element.remove();
    this._element = null;
  }
}
