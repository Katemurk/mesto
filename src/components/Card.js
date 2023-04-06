/* заготовка карточки */
export class Card {
  constructor(
    item,
    userId,
    { openPreview, handleTrashClick, handleGetLike, handleDeleteLike },
    templateSelector
  ) {
    this._item = item;
    this._id = item._id;
    this._userId = userId;
    this._ownerId = item.owner._id;
    this._likes = item.likes;
    this._counter = item.counter;
    this._templateSelector = templateSelector;
    this._openPreview = openPreview;
    this._handleTrashClick = handleTrashClick;
    this._handleGetLike = handleGetLike;
    this._handleDeleteLike = handleDeleteLike;
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
    this._counter = this._element.querySelector(".card__count");
    this._counter.textContent = this._likes.length;
    this._haveLike();
    this._haveTrash();

    this._setEventListeners();
    return this._element;
  }

  _haveLike() {
    if (this._likes.some((item) => item._id === this._userId)) {
      this._like.classList.add("card__like-button_active");
    }
  }

  //навешаем слушателей на кнопки и клики
  _setEventListeners() {
    this._image.addEventListener("click", () => {
      this._openPreview(this._item);
    });

    this._like.addEventListener("click", () => {
      this._changeLike();
    });

    this._trash.addEventListener("click", () => {
      this._handleDeleteClick(this._id);
    });
  }

  _changeLike() {
    if (this._like.classList.contains("card__like-button_active")) {
      this._handleDeleteLike(this._id);
    } else {
      this._handleGetLike(this._id);
    }
  }
  //отдельная функция на лайк
  toggleLike(item) {
    this._like.classList.toggle("card__like-button_active");
    this._likes = item.likes;
    this._counter.textContent = this._likes.length;
  }

  _haveTrash() {
    if (this._userId !== this._ownerId) {
      this._trash.remove();
    }
  }

  //отдельная функция на удаление
  removeCard() {
    this._element.remove();
    this._element = null;
  }
  _handleDeleteClick() {
    this._handleTrashClick(this._id);
  }
}
